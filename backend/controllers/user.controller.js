const User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userRegister = (req, res) => {

    console.log("hgjhgj");

    const userID = req.body.userID;
    const userName = req.body.userName;
    const contactNumber = req.body.contactNumber;
    let email = req.body.email;
    const position = req.body.position;
    const type = req.body.type;
    const password = req.body.password;

    console.log("hgjhgj");

    if (!userID){
        return res.send({
            success: false,
            message: 'User ID can not be blank.'
        });
    }
    if (!userName){
        return res.send({
            success: false,
            message: 'User Name can not be blank.'
        });
    }
    if (!email){
        return res.send({
            success: false,
            message: 'Email can not be blank.'
        });
    }
    if (!contactNumber){
        return res.send({
            success: false,
            message: 'Contact Number can not be blank.'
        });
    }
    if (!position){
        return res.send({
            success: false,
            message: 'User Position can not be blank.'
        });
    }
    if (!type){
        return res.send({
            success: false,
            message: 'User Type can not be blank.'
        });
    }
    if (!password){
        return res.send({
            success: false,
            message: 'Password can not be blank.'
        });
    }

    email = email.toLowerCase();

    User.find({
        email: email
    },(err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });

        }
        else if(previousUsers.length > 0){
            console.log('account exist');
            return res.send({
                success: false,
                message: 'Account already exist.'
            });
        }
        else{
            const newUser = new User({
                userID,
                userName,
                email,
                contactNumber,
                position,
                type,
                password
            });
            newUser.save((err, user) => {
                if (err === null) {
                    return res.send({
                        success: true,
                        message: 'new User added.'
                    });
                }
                else if (err.errors.email) {
                    return res.send({
                        success: false,
                        message: err.errors.email.message

                    });
                }
                else if (err.errors.contactNumber) {
                    return res.send({
                        success: false,
                        message: err.errors.contactNumber.message
                    });
                }
                else {
                    return res.send({
                        success: false,
                        message: err.errors.password.message
                    });
                }
            });    
        }
    });
};

module.exports = {
    userRegister
};