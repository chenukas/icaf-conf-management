const router = require("express").Router();

const submissionController = require("../controllers/submission.controller");

router.post("/submissions", submissionController.addSubmission);
router.get("/submissions", submissionController.getSubmissions);
router.get("/submissions/:id", submissionController.viewSubmissionById);
router.get("/users/:uid/submissions", submissionController.getSubmissionsByUID);
router.put('/submissions/:id/status', submissionController.approveSubmissionById);
router.delete('/submissions/:id', submissionController.deleteSubmissionById);

module.exports = router;