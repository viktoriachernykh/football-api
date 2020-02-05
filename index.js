const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 4000;
// const db = require("./db");
// const model = require("./team/model");
const teamRouter = require("./team/router");

app.use(jsonParser);
app.use(teamRouter);

app.listen(port, () =>
  console.log(`Example TEAM app listening on port ${port}!`)
);
