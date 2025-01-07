const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json());

// MySQL 連線設定
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL 連線失敗:", err);
  } else {
    console.log("MySQL 連線成功");
  }
});

// 測試 API
app.get("/api/hello", (req, res) => {
  res.send("後端運行成功！");
});

// 查詢範例
app.get("/api/novels", (req, res) => {
  db.query("SELECT * FROM novels", (err, results) => {
    if (err) {
      res.status(500).send("查詢失敗");
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`伺服器運行於 http://localhost:${PORT}`);
});
