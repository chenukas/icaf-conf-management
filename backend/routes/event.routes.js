const router = require("express").Router();
const eventController = require("../controllers/event.controller");

router.post("/events", eventController.addEvent);
router.get("/events", eventController.getEvents);
router.get("/events/:id", eventController.getEventById)
router.delete('/events/:id', eventController.deleteEventById)

module.exports = router;
