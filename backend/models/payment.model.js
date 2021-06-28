const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  type: { type: String, require: true },
  userId: { type: Number, require: true },
  payDate: { type: Date, require: true },
  amount: { type: Number, require: true },
});

module.exports = mongoose.model("payment", paymentSchema);
