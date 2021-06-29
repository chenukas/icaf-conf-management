const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * User Model
 * */

const userSchema = new Schema(
  {
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: {
          validator: function(v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: '{VALUE} is not a valid Email!'
        },
        required: [true, 'User email required']
    },
    contactNumber: {
        type: String,
        validate: {
          validator: function(v) {
            return /^\d{10}$/.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
    position: {
        type: String,
        required: true,
    },
    type: {
        type: String
    },
    password: {
        type: String,
        validate: {
          validator: function(v) {
            return /((?=.*[a-z])(?=.*[@#$%!]).{6,40})/.test(v);
          },
          message: '{VALUE} is not a valid password!'
        },
        required: [true, 'User password required']
    },
    saltSecret: String
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        this.password = hash;
        this.saltSecret = salt;
        next();
      });
    });
  });
  
userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};

module.exports = mongoose.model("User", userSchema);