const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 4000;
// const db = require("./db");
// const Player = require("./player/model");
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const cityRouter = require("./city/router");

app.use(jsonParser, teamRouter, playerRouter, cityRouter);

app.listen(port, () =>
  console.log(`Example TEAM app listening on port ${port}!`)
);
