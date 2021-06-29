const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema(
  {
    title: { type: String, require: true },
    abstract: { type: String, require: true },
    authors: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    fileURL: { type: String, require: true },
    status: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
