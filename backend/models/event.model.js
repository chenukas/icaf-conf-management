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
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
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
