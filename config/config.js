require('dotenv').config();
module.exports = {
  host: process.env.HOST || "",
  database: process.env.DB_NAME || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  dialect: process.env.DATABASE || "mysql"
};
