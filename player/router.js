const { Router } = require("express");
const Player = require("./model");
const Team = require("../team/model");

const router = new Router();

router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(players => res.send(players))
    .catch(err => {
      next(err);
    });
});

router.post("/player", (req, res) => {
  Player.create(req.body)
    .then(player => res.send(player))
    .catch(err => {
      next(err);
    });
});

router.get("/player/:id", async (req, res) => {
  // const playerID = parseInt(req.params.id);
  const player = await Player.findByPk(req.params.id, { include: [Team] });
  if (!player) {
    res.status(404).send("User not found");
  } else {
    res.send(player);
  }
});

module.exports = router;
