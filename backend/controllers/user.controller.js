const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretOrKey = require("../config/keys").secretOrKey;

const userRegister = (req, res) => {
  const fullName = req.body.fullName;
  const contactNumber = req.body.contactNumber;
  let email = req.body.email;
  const position = req.body.position;
  const type = req.body.type;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  console.log(position);

  if (!fullName) {
    return res.send({
      success: false,
      message: "User Name can not be blank.",
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: "Email can not be blank.",
    });
  }
  if (!contactNumber) {
    return res.send({
      success: false,
      message: "Contact Number can not be blank.",
    });
  }
  if (!type) {
    return res.send({
      success: false,
      message: "User Type can not be blank.",
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Password can not be blank.",
    });
  }
  if (password !== confirmPassword) {
    return res.send({
      success: false,
      message: "Password is not matching",
    });
  }

  email = email.toLowerCase();

  User.find(
    {
      email: email,
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error",
        });
      } else if (previousUsers.length > 0) {
        console.log("account exist");
        return res.send({
          success: false,
          message: "Account already exist.",
        });
      } else {
        const newUser = new User({
          fullName,
          email,
          contactNumber,
          position,
          type,
          password,
        });
        newUser.save((err, user) => {
          if (err === null) {
            return res.send({
              success: true,
              message: "new User added.",
            });
          } else if (err.errors.email) {
            return res.send({
              success: false,
              message: err.errors.email.message,
            });
          } else if (err.errors.contactNumber) {
            return res.send({
              success: false,
              message: err.errors.contactNumber.message,
            });
          } else {
            return res.send({
              success: false,
              message: err.errors.password.message,
            });
          }
        });
      }
    }
  );
};

const login = (req, res) => {
  if (!req.body.email) {
    return res.send({
      success: false,
      message: "E-mail is undefined",
    });
  }
  if (!req.body.password) {
    return res.send({
      success: false,
      message: "Password is undefined",
    });
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          userName: user.userName,
          email: user.email,
        };
        jwt.sign(payload, secretOrKey, (err, token) => {
          if (err) throw err;
          return res.send({
            success: true,
            message: "Token is assigned",
            token: token,
            user: user,
          });
        });
      } else {
        return res.send({
          success: false,
          message: "Password is incorrect",
        });
      }
    });
  });
};

const getAllUsers = (req, res) => {
  User.find({})
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

const deleteUserByID = (req, res) => {
  User.findByIdAndDelete(req.params.id)
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

const userDetailsByID = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

const userProfileByEmail = (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({
      success: false,
      message: "Email is undefined",
    });
  }

  let email = req.body.email;
  email = email.toLowerCase();

  User.find(
    {
      email: email,
    },
    (err, users) => {
      if (err) {
        console.log("err 2:", err);
        return res.send({
          success: false,
          message: "Error: Server error",
        });
      }
      if (users.length !== 1) {
        return res.send({
          success: false,
          message: "Invalid User Email",
        });
      }

      const user = users[0];

      User.findById(user._id)
        .populate("site")
        .then((result) => {
          res.status(200).json({
            success: true,
            data: result,
            message: "Searching ID is found.",
          });
        });
    }
  );
};

const updatePositionByID = (req, res) => {
  User.findByIdAndUpdate(
    req.body.id,
    {
      position: req.body.position,
    },
    { new: true }
  )
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(503).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = {
  userRegister,
  login,
  getAllUsers,
  deleteUserByID,
  userProfileByEmail,
  userDetailsByID,
  updatePositionByID,
};
