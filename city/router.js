const { Router } = require("express");
const City = require("./model");
const Player = require("../player/model");
const Team = require("../team/model");

const router = new Router();

router.get("/city", (req, res, next) => {
  City.findAll()
    .then(cities => res.send(cities))
    .catch(err => {
      next(err);
    });
});

router.post("/city", (req, res) => {
  City.create(req.body)
    .then(city => res.send(city))
    .catch(err => {
      next(err);
    });
});

router.get("/city/:id", async (req, res) => {
  // const cityID = parseInt(req.params.id);
  const city = await City.findByPk(req.params.id, { include: [Team, Player] });
  if (!city) {
    res.status(404).send("User not found");
  } else {
    res.send(city);
  }
});

module.exports = router;
