const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use(planetsRouter);

module.exports = app;
