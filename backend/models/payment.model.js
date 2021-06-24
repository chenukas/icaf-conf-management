const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  type: { type: String, require: true },
  userID: { type: Schema.Types.ObjectId, ref: "User", require: true },
  payDate: { type: Date, require: true },
  amount: { type: Number, require: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
