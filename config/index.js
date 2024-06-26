const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const BACKEND_SERVICE_PATH = process.env.BACKEND_SERVICE_PATH;

if (!MONGODB_CONNECTION_STRING) {
  throw new Error(
    "MONGODB_CONNECTION_STRING environment variable is not defined"
  );
}

module.exports = {
  PORT,
  MONGODB_CONNECTION_STRING,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
};
