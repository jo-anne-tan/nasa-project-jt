const express = require("express");

const app = express();

module.exports = app;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ hello: "world" });
});
