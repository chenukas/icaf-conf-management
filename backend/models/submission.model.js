const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema(
  {
    title: { type: String, require: true },
    abstract: { type: String, require: true },
    authors: [
      {
        type: String,
      },
    ],
    fileURL: { type: String, require: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);