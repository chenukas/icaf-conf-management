const router = require("express").Router();
const submissionController = require('../controllers/submission.controller')

router.get('/submissions', submissionController.getAllSubmissions)
router.put('/submissions/:id/status', submissionController.approveSubmissionById)

module.exports = router