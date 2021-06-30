const Submission = require("../models/submission.model");
const submissionService = require("../services/submission.service");

/**
 * Create submission
 * POST /submissions
 * @param req
 * @param res
 * @returns {*}
 */
const addSubmission = (req, res) => {
    if (!req.body.uid) {
        return res.status(400).json({
            success: false,
            message: "UID is undefined",
        })
    }

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

    if (!req.body.authors) {
        return res.status(400).json({
            success: false,
            message: "Authors required",
        })
    }

    if (!req.body.fileURL) {
        return res.status(400).json({
            success: false,
            message: "File URL is undefined",
        });
    }

    submissionService
        .createSubmissionRecord(req.body)
        .then((result) => {
            res.status(200).json({
                success: true,
                data: result,
            });
        }).catch((err) => {
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
        .populate('uid')
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
 * Get submissions by UID
 * GET /users/{uid}/submissions
 * @param {*} req 
 * @param {*} res 
 */
const getSubmissionsByUID = (req, res) => {
    submissionService.getSubmissionsByUID(req.params.uid)
        .then(
            result => res.status(200)
                .json({ success: true, data: result })
        ).catch(
            err => res.status(500)
            .json({ success: false, error: err.message })
        );
}

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
    getSubmissionsByUID,
    viewSubmissionById,
    approveSubmissionById,
    deleteSubmissionById
};





