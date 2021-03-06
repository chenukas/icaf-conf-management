const Event = require("../models/event.model");
const mongoose = require("mongoose");

const addEvent = (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const venue = req.body.venue;
  const start = req.body.start;
  const end = req.body.end;
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

  if (!start) {
    return res.status(400).json({
      success: false,
      message: "Start time is undefined",
    });
  }

  if (!end) {
    return res.status(400).json({
      success: false,
      message: "End time is undefined",
    });
  }

  if (start > end) {
    return res.status(400).json({
      success: false,
      message: 'Start date is after end date'
    })
  }

  const event = new Event({
    name,
    description,
    venue,
    start,
    end,
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
  Event.find({}).sort({'start': -1})
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

const getEventById = (req, res) => {
  Event.findById(req.params.id).then(result => {
    res.status(200).json({
        success: true,
        data: result
    });
}).catch(err => {
    res.status(502).json({
        success: false,
        message: err.message
    });
});
}

const deleteEventById = (req, res) => {
  Event.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).json({
      success: true,
    })
  }).catch(err => {
    res.status(500).json({
      success: false,
      message: err.message
    })
  })
}

module.exports = {
  addEvent,
  getEvents,
  deleteEventById,
  getEventById
};
