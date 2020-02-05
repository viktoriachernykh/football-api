const Sequelize = require("sequelize");
const db = require("../db");
const City = require("../city/model");

// const Team = db.define("team", { name: Sequelize.STRING });
const Team = db.define(
  "team",
  {
    name: {
      type: Sequelize.STRING,
      field: "name"
    }
  },
  { tableName: "teams" }
);
Team.belongsTo(City);

module.exports = Team;
