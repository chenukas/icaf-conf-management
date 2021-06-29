const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema({
    uid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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