const router = require("express").Router();
const loginModel = require('../models/userLoginModel');

router.post("/signup" , async (req, res) => {
    try{
        const {email, username, password} = req.body;
        const newlogin = new loginModel({
            email,
            username,
            password,
        });
        await newlogin.save().then(() => {
            res.status(201).json({message: "Login successful"})
        });
    }catch(error){
        console.error(error);
    }
})

module.exports = router;