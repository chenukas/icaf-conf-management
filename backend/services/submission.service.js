const Submission = require('../models/submission.model');

/**
 * Create new submission record
 * @param uid - uid of publisher
 * @param title - title of submission
 * @param abstract - abstract of submission
 * @param authors - list of authors for publication
 * @param fileURL - url of file uploaded
 * @returns {Document}
 */
const createSubmissionRecord = ({uid, title, abstract, authors, fileURL}) => {
    return new Submission({uid, title, abstract,authors, fileURL}).save();
}

/**
 * Delete submission record
 * @param id
 * @returns {QueryWithHelpers<Document | null, Document, {}>}
 */
const deleteSubmissionRecord = id => {
    return Submission.findByIdAndDelete(id);
}

/**
 * Get submissions by UID
 * @param {ObjectID} uid uid of user
 * @returns 
 */
const getSubmissionsByUID = uid => Submission.find({uid});

module.exports = {
    createSubmissionRecord,
    deleteSubmissionRecord,
    getSubmissionsByUID
}
