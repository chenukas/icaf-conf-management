const Payment = require("../models/payment.model");
//const User = require("../models/user.model");
const mongoose = require("mongoose");

const addPayment = async (req, res) => {
  if (!req.body.type) {
    return res.status(400).json({
      success: false,
      message: "Type is undefined",
    });
  }

  if (!req.body.userId) {
    return res.status(400).json({
      success: false,
      message: "User ID is undefined",
    });
  }

  if (!req.body.payDate) {
    return res.status(400).json({
      success: false,
      message: "Payment Date is undefined",
    });
  }

  if (!req.body.amount) {
    return res.status(400).json({
      success: false,
      message: "Amount is undefined",
    });
  }

  const payment = new Payment(req.body);

  //payment.userID = mongoose.Types.ObjectId(req.body.userID);

  await Payment.save()
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ err: err.message });
    });
};

const viewPaymentById = async (req, res) => {
  await Payment.findById(req.params.id)

    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ err: err.message });
    });
};

const viewAllPayments = async (req, res) => {
  await Payment.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ err: err.message });
    });
};

module.exports = {
  addPayment,
  viewPaymentById,
  viewAllPayments,
};
