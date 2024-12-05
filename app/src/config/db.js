const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-lecture.c9a8kyko6w5f.ap-northeast-2.rds.amazonaws.com",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
});

db.connect();

module.exports = db;
