// build schema
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: { type: Date, default: Date.now },
  exercise: [
    {
      type: { type: String, required: true, trim: true },
      name: { type: String, trim: true, required: true },
      duration: {
        type: Number,
        unique: true,
        required: true,
      },
      weight: {
        type: Number,
        unique: true,
        required: true,
      },
      reps: {
        type: Number,
        unique: true,
        required: true,
      },
      sets: {
        type: Number,
        unique: true,
        required: true,
      },
    },
  ],
});

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
