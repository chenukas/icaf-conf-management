const express = require("express");
const cors = require("cors");
const compression = require("compression");

const init = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded())
  app.use(compression());
};

module.exports = init;
