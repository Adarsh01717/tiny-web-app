const express = require("express");
const path = require("path");

function createApp() {
  const app = express();

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/greet/:name", (req, res) => {
    res.json({ message: `Hello, ${req.params.name}!` });
  });

  return app;
}

module.exports = { createApp };