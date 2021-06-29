const router = require("express").Router();
const submissionController = require("../controllers/submission.controller");

router.post("/submissions", submissionController.addSubmission);
router.get("/submissions", submissionController.viewAllSubmissions);
router.get("/submissions/:id", submissionController.viewSubmission);
router.delete('/submissions/:id', submissionController.deleteSubmission);

module.exports = router;