const Payment = require("../models/payment.model");
const mongoose = require("mongoose");

const addPayment = (req, res) => {
  if (!req.body.type) {
    return res.status(400).json({
      success: false,
      message: "Type is undefined",
    });
  }

  if (!req.body.payDate) {
    return res.status(400).json({
      success: false,
      message: "Date is undefined",
    });
  }

  if (!req.body.amount) {
    return res.status(400).json({
      success: false,
      message: "Amount is undefined",
    });
  }

  //Adding payments
  const payment = new Payment(req.body);
  console.log(payment);

  payment
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

//View payment of particular member
const viewPaymentById = (req, res) => {
  Payment.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        data: err.message,
      });
    });
};

//View all the payments
const viewAllPayments = (req, res) => {
  Payment.find({})
    .populate("User", "fullName type")
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        data: err.message,
      });
    });
};

module.exports = {
  addPayment,
  viewPaymentById,
  viewAllPayments,
};
