const router = require("express").Router();
const eventController = require("../controllers/event.controller");

router.post("/events", eventController.addEvent);
router.get("/events", eventController.getEvents);

module.exports = router;
