const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(list => res.send(list))
    .catch(err => {
      console.error("Error here", err);
      process.exit(1);
    });
});

router.post("/team", (req, res) => {
  Team.create(req.body)
    .then(team => res.send(team))
    .catch(err => {
      next(err);
    });
});
module.exports = router;
