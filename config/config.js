require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  jwtSecret: process.env.JWT_SECRET
};

module.exports = { config };
