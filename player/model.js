const Team = require("../team/model");
const City = require("../city/model");

const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define(
  "player",
  {
    name: {
      type: Sequelize.STRING,
      field: "name"
    },
    number: {
      type: Sequelize.INTEGER,
      field: "number"
    }
  },
  { tableName: "players" }
);
Player.belongsTo(Team);
Player.belongsTo(City);

module.exports = Player;
