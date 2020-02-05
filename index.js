const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 4000;
// const db = require("./db");
// const Player = require("./player/model");
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");

app.use(jsonParser);
app.use(teamRouter);
app.use(playerRouter);

app.listen(port, () =>
  console.log(`Example TEAM app listening on port ${port}!`)
);
