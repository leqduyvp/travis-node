const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Everything is fine");
});

app.listen(process.env.PORT || 3000);
