const mogoose = require("mongoose");

const bookschema = new mogoose.Schema({
    bookname:{ type: String , require:true},
    description:{ type: String , require:true},
    author:{ type: String , require:true},
    image:{ type: String , require:true},
    price:{ type: Number , require:true},
    hashtags:{type:String,reuired:true}
});

module.exports = new mogoose.model("books",bookschema);


