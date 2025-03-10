require("dotenv").config()
const mongoose = require("mongoose");
const userName = process.env.MONGOOSE_USERNAME;
const dbPassword = process.env.MDB_PASSWORD;
const connectionString = `mongodb+srv://${userName}:${dbPassword}@librarymanagment.yrw7k.mongodb.net/`

if(!userName || !dbPassword){
    console.error("MongoDB connection error with the username and password");
    process.exit(1);
}

//main connection to the MongoDB 
mongoose.connect(connectionString).then(()=>{
    console.log("Database Connected");
}).catch(()=>{
    console.log("Something is wrong connecting database...");
})
