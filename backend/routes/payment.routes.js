const router = require("express").Router();
const paymentController = require("../controllers/payment.controller");

router.post("/payments", paymentController.addPayment);
router.get("/payments", paymentController.viewAllPayments);
router.get("/payments/:id", paymentController.viewPaymentById);

module.exports = router;
