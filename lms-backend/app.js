const express = require("express");
const app = express();
const bookRoutes = require("./routes/booksroutes");
require("./connection/connection");

app.use(express.json())
app.use("/api/v1",bookRoutes);

app.listen(1000,()=>{
    console.log("Sevrer is running");
});