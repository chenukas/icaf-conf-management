const Payment = require("../models/payment.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

const addPayment = (req, res) => {
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

  payment.userName = mongoose.Types.ObjectId(req.body.userName);

  payment.save
    .then((res) => {
      res.status(200).json({
        success: true,
        message: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const viewPaymentById = (req, res) => {
  Payment.findById(req.params.id)
    .then((res) => {
      res.status(200).json({
        success: true,
        message: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const viewAllPayments = (req, res) => {
  Payment.find({})
    .then((res) => {
      res.status(200).json({
        success: true,
        message: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  addPayment,
  viewPaymentById,
  viewAllPayments,
};
