const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
  Workout.findByIdandUpdate(
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
