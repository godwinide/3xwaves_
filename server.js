const express = require("express");
const cors = require("cors");
const app = express();
const expressLayout = require("express-ejs-layouts");

// CONFIGS
require("dotenv").config();
// MIDDLEWARES
app.use(cors());
app.use(express.static('./public'))
app.use(expressLayout);
app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: true
}));


const PORT = process.env.PORT || 2022;

// URLS
// app.use("*", require("./routes/down"))
app.use("/", require("./routes/index"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));