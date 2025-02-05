const express = require("express");
const app = express();
const bookRoutes = require("./routes/booksroutes");
const loginRoutes = require("./routes/loginRoutes");
const cors = require("cors");
require("./connection/connection");

app.use(cors());
app.use(express.json({extended: true, urlencoded: true}));
app.use("/api/v1", bookRoutes);
app.use("/api/login",loginRoutes);

app.get("/api/file", (req, res) => {
    const file = req.query.fileName;
    res.download(file); // ;
});

app.listen(5000, () => {
    console.log("Sevrer is running");
});