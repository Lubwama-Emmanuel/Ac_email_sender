const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");
const contactRoute = require("./routes/contactRoute");
const errorHandler = require("./controllers/errorHandler");

const path = require("path");
const pug = require("pug");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/api/emailSender/contact", contactRoute);

app.use(errorHandler);
module.exports = app;
