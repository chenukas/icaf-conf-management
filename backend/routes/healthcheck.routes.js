const router = require("express").Router();
const healthCheckController = require("../controllers/healthcheck.controller");

router.get("/healthcheck", healthCheckController.healthCheck);

module.exports = router;
