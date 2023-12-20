// server/server.js
// バックエンドサーバーExpressの準備（API）

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3002;

app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({ message: "This is server.js" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
