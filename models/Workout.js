const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },
    
      name: {
        type: String,
        trim: true,
        required: true
      },
    
      duration: Number,

      sets: Number,
    
      weight: Number,
    
      distance: Number,
    
      reps: Number,
    }
  ],

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;