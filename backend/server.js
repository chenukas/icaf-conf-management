require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/database");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

connectDatabase();
