const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  type: { type: String, require: true },
  userId: { type: Number, require: true },
  payDate: { type: Date, require: true },
  amount: { type: Number, require: true },
});

const Payment = mongoose.model("payments", paymentSchema);
module.exports = Payment;
