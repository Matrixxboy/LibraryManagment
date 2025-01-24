const mongoose = require("mongoose");
const userName = 'matrixboy' //user name of the Database user
const dbPassword = 'utsav1472004' //password of Database user
const connectionString = `mongodb+srv://${userName}:${dbPassword}@librarymanagment.yrw7k.mongodb.net/`

//main connection to the MongoDB 
mongoose.connect(connectionString).then(()=>{
    console.log("Database Connected");
}).catch(()=>{
    console.log("Something is wrong")
})

