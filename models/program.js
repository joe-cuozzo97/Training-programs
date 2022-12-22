const mongoose = require("mongoose");
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const programSchema = new Schema(
    {
  Title: {
    type: String,
    required: true,
  },
  DaysPerWeek: {
    type: Number,
    required: true,
  },
  Movement: {
    type: String,
    required: true,
  },
  Load: {
    type: Number,
    required: true,
  },
  Sets: {
    type: Number,
    required: true,
  },
  Reps: {
    type: Number,
    required: true,
  },


});

module.exports = mongoose.model("Program", programSchema);