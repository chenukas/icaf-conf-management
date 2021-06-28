const router = require("express").Router();
const paymentController = require("../controllers/payment.controller");

router.post("/add", paymentController.addPayment);
router.get("/", paymentController.viewAllPayments);
router.get("/:id", paymentController.viewPaymentById);

module.exports = router;
