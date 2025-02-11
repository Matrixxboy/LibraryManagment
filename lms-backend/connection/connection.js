require('dotenv').config();
const mongoose = require("mongoose");
const userName = process.env.MONGOOSE_USERNAME;
const dbPassword = process.env.MDB_PASSWORD;
const connectionString = `mongodb+srv://${userName}:${dbPassword}@librarymanagment.yrw7k.mongodb.net/`

// To Check database connection issues.
if (!userName || !dbPassword) {
    console.error("Error: MONGOOSE_USERNAME or MDB_PASSWORD environment variables are not set.");
    process.exit(1); // Exit the process if credentials are missing
}

//main connection to the MongoDB
mongoose.connect(connectionString).then(()=>{
    console.log("Database Connected");
}).catch(()=>{
    console.log("Something is wrong with the Database connection");
})

