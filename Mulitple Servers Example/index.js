const express = require("express");
const firstApp = express();
const secondApp = express();
const thirdApp = express();

const ports = [8000, 8020, 8080];

firstApp.get("/", (req, res) => {
  res.send("This is a response from the first server");
});

secondApp.get("/", (req, res) => {
  res.send("This is a response from the second server");
});

thirdApp.get("/", (req, res) => {
  res.send("This is a response from the third server");
});

firstApp.listen(ports[0], () => {
  console.log(`Listening on port ${ports[0]}`);
});

secondApp.listen(ports[1], () => {
  console.log(`Listening on port ${ports[1]}`);
});

thirdApp.listen(ports[2], () => {
  console.log(`Listening on port ${ports[2]}`);
});
