const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true
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
    
      weight: Number,
    
      distance: Number,
    
      reps: Number,
    }
  ],

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;