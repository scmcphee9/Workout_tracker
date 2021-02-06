const router = require("express").Router();
const { Workouts } = require("../models");

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workouts.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .sort({ day: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/workouts/range", (req, res) => {
  Workouts.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
  Workouts.findByIdandUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    {
      new: true,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
