const mongoose=require("mongoose");

const userLoginSchema = new mongoose.Schema({
    email : {type:String, required:true},
    password: {type:String, required:true},
    username: {type:String, required:true},
});

module.exports = new mongoose.model("UserDetails",userLoginSchema);