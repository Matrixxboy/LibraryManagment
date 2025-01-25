const express = require("express");
const app = express();
const bookRoutes = require("./routes/booksroutes");
const cors = require("cors");
require("./connection/connection");

app.use(cors());
app.use(express.json());
app.use("/api/v1",bookRoutes);

app.listen(1000,()=>{
    console.log("Sevrer is running");
});