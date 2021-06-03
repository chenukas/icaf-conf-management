const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  speakers: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Event", eventSchema);
