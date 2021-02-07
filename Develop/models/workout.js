// build schema
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String, trim: true },
      name: { type: String, trim: true },
      duration: {
        type: Number,
        // unique: true,
        // required: true,
      },
      weight: {
        type: Number,
        // unique: true,
        // required: true,
      },
      reps: {
        type: Number,
        // unique: true,
        // required: true,
      },
      sets: {
        type: Number,
        // unique: true,
        // required: true,
      },
      distance: {
        type: Number,
        // unique: true,
      },
    },
  ],
});

const Workouts = mongoose.model("Workout", workoutSchema);
// console.log("bottom of workout model");
module.exports = Workouts;
