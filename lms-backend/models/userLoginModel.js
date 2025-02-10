const mongoose=require("mongoose");

const userLoginSchema = new mongoose.Schema({
    username: {type:String, required:true},
    email : {type:String, required:true},
    password: {type:String, required:true},
});

module.exports = new mongoose.model("UserDetails",userLoginSchema);