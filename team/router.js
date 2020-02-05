const { Router } = require("express");
const Team = require("./model");

const router = new Router();

// const logginMiddleware = (resq, res, next) => {
//   console.log("Logged in");
//   next();
// };

// router.get("/team", logginMiddleware, (req, res, next) => {
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

router.get("/team/:id", async (req, res) => {
  const teamID = parseInt(req.params.id);
  const team = await Team.findByPk(teamID);
  if (!team) {
    res.status(404).send("User not found");
  } else {
    res.send(team);
  }
});

module.exports = router;
