const mongoose = require("mongoose");
const {Schema} = mongoose;

const paymentSchema = new Schema(
    {
        paymentId : { type: String, require: true },
        type : { type: String, require: true },
        userID : { type: String, require: true },
        userName : { type: String, require: true },
        payDate : { type: Date, require: true },
        amount : { type: Number, require: true }
    }
);

module.exports = mongoose.model("Payment", paymentSchema);