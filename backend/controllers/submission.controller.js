const Submission = require("../models/submission.model");

/**
 *
 * @param req
 * @param res
 * @returns {*}
 */
const addSubmission = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      success: false,
      message: "Title is undefined",
    });
  }
  if (!req.body.abstract) {
    return res.status(400).json({
      success: false,
      message: "Abstract is undefined",
    });
  }
  if (!req.body.fileURL) {
    return res.status(400).json({
      success: false,
      message: "File URL is undefined",
    });
  }

  //create a new submission
  const submission = new Submission(req.body);

  //Add to database
  submission
    .save()
    .then((result) => {
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
};

/**
 *
 * @param req
 * @param res
 */
const getSubmissions = (req, res) => {
  Submission.find({})
    .then((result) => {
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
};

/**
 *
 * @param req
 * @param res
 */
const viewSubmissionById = (req, res) => {
  Submission.findById(req.params.id)
    .then((res) => {
      res.status(200).json({
        success: true,
        message: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

/**
 *
 * @param req
 * @param res
 */
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

/**
 *
 * @param req
 * @param res
 */
const deleteSubmissionById = (req, res) => {
  Submission.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  addSubmission,
  getSubmissions,
  viewSubmissionById,
  approveSubmissionById,
  deleteSubmissionById
};





