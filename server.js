const express = require("express");
const dotenv = require("dotenv").config();

// Route files
const objets = require("./routes/objets");

//import logger
const logger = require("pino-http")();
const app = express();
//app.use(logger);
//mount routers
app.use("/api/v1/objects", objets);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
