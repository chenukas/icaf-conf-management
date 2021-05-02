const router = require("express").Router();
const userController = require("../controllers/user.controller");

console.log("kgjgjgjh");

router.post("/register", userController.userRegister);

module.exports = router;