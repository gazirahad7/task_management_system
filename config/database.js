const mysql = require("mysql2");
require("dotenv").config();

const dbConnaction = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});

//

module.exports = dbConnaction;
