const express = require("express");
const cors = require("cors");

const init = (app) => {
  app.use(express.json());
  app.use(cors());
};

module.exports = init;
