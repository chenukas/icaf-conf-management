const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  type: { type: Schema.Types.ObjectId, ref: "User" },
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  payDate: { type: Date, require: true },
  amount: { type: Number, require: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
