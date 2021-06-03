const Event = require("../models/event.model");

const addEvent = (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const venue = req.body.venue;
  const date = req.body.date;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const imageUrl = req.body.imageUrl;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Event name is undefined",
    });
  }

  if (!description) {
    return res.status(400).json({
      success: false,
      message: "Event description is undefined",
    });
  }

  if (!venue) {
    return res.status(400).json({
      success: false,
      message: "Event venue is undefined",
    });
  }

  if (!date) {
    return res.status(400).json({
      success: false,
      message: "Event date is undefined",
    });
  }

  if (!startTime) {
    return res.status(400).json({
      success: false,
      message: "Start time is undefined",
    });
  }

  if (!endTime) {
    return res.status(400).json({
      success: false,
      message: "End time is undefined",
    });
  }

  const event = new Event({
    name,
    description,
    venue,
    date,
    startTime,
    endTime,
    imageUrl,
  });

  event
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

const getEvents = (req, res) => {
  Event.find({})
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

module.exports = {
  addEvent,
  getEvents,
};
