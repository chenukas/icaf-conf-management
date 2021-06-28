const Submission = require("../models/submission.model");
const mongoose = require("mongoose");

const addSubmission = (req, res) => {
    
}

const getAllSubmissions = (req, res) => {
    Submission.find({}).
    /* populate('authors'). */then((result) => {
        res.status(200).json({
            success: true,
            data: result
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: err.message
        })
    })
}

const approveSubmissionById = (req, res) => {
    Submission.findByIdAndUpdate(req.params.id, {
        status: 'approved'
    }, { new: true }).then((result) => {
        res.status(200).json({
          success: true,
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: err.message,
        });
    });
}

module.exports = {
    getAllSubmissions,
    approveSubmissionById
}