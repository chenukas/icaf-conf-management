const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/register", userController.userRegister);
router.get("/getUsers", userController.getAllUsers);
router.delete("/deleteUser/:id", userController.deleteUserByID);
router.get("/viewUser/:id", userController.userDetailsByID);
router.put("/updatePosition", userController.updatePositionByID);

module.exports = router;
