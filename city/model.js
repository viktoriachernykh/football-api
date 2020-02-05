const Sequelize = require("sequelize");
const db = require("../db");

const City = db.define(
  "city",
  {
    name: {
      type: Sequelize.STRING,
      field: "name"
    },
    population: {
      type: Sequelize.INTEGER,
      field: "population"
    }
  },
  { tableName: "cities" }
);

module.exports = City;
