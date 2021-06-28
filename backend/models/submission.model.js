const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema(
  {
    title: { type: String, require: true },
    abstract: { type: Date, require: true },
    authors: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    title: { type: String, require: true },
    fileURL: { type: String, require: true },
    status: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
