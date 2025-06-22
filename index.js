const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

const unknownEndpoint = (request, response) => {
  response.sendFile(path.join(__dirname, "404.html"));
};

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`My first Express app - listening on PORT ${PORT}`);
});
