// build schema
const mongoose = require("mongoose");

const virtual = { toJSON: { virtuals: true } };

const workoutSchema = new mongoose.Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "You must enter the type of the workout.",
        },
        name: {
          type: String,
          trim: true,
          required: "You must enter the name of the workout.",
        },
        duration: {
          type: Number,
          required: "You must enter the duration of the workout.",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  virtual
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workouts = mongoose.model("Workout", workoutSchema);
// console.log("bottom of workout model");
module.exports = Workouts;
