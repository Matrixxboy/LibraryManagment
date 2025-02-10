const UserModel = require("../models/userLoginModel");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const user = await UserModel.findOne({email})
        if (user) {
            return res.status(400).json({
                message: `User with email ${email} already exists` ,
                success: false
            })
        }
        const userModel = new UserModel({username, email, password});
        userModel.password = await bcrypt.hash(password, 12);
        await userModel.save();
        res.status(200).json({
            message: "User successfully created",
            success: true
        })
    }catch (e) {
        res.status(400).json({
            message: e.message,
            success: false
        })
    }
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        const errorMsg = "Authentication failed";
        if (!user) {
            return res.status(402).json({
                message: errorMsg,
                success: false
            })
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(402).json({
                message: errorMsg,
                success: false
            })
        }
        const jwtToken = Jwt.sign(
        {email:user.email, _id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
        )
        res.status(201).json({
            message: "User successfully logged in",
            success: true,
            jwtToken,
            email: user.email,
            name: user.username
        })

    }catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    signup,
    login,
};