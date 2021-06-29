const Submission = require('../models/submission.model');

/**
 * Create new submission record
 * @param title - title of submission
 * @param abstract - abstract of submission
 * @param fileURL - url of file uploaded
 * @returns {Document}
 */
const createSubmissionRecord = ({title, abstract, fileURL}) => {
    return new Submission({title, abstract, fileURL}).save();
}

/**
 * Delete submission record
 * @param id
 * @returns {QueryWithHelpers<Document | null, Document, {}>}
 */
const deleteSubmissionRecord = id => {
    return Submission.findByIdAndDelete(id);
}

module.exports = {
    createSubmissionRecord,
    deleteSubmissionRecord
}
