const Sequelize = require("sequelize");
// const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync({ force: true })
  // db.sync()
  .then(() => console.log("Database schema has been successfully updated"))
  .catch(err => {
    console.error("Error here", err);
    process.exit(1);
  });

module.exports = db;
