const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error.js");
const cors = require("cors");
//const logger = require("pino-http")();

//connect to DB
connectDB();

// Route files
const products = require("./routes/products");
const auth = require("./routes/auth");

//import logger

const app = express();

//Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

//app.use(logger);

// Enable CORS
app.use(cors());

//mount routers
app.use("/api/v1/products", products);
app.use("/api/v1/auth", auth);

//use error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//handle unhandle promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server & exit process
  server.close(() => process.exit(1));
});
