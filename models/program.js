const mongoose = require("mongoose");
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const templateSchema = new Schema({
  exercise: {
    type: Array,
    required: false,
  },
  weight: {
    type: Array,
    required: false,
  },
  sets: {
    type: Array,
    required: false,
  },
  reps: {
    type: Array,
    required: false,
  },
  day: {
    type: Number,
    required: false,
  },
});

const commentSchema = new Schema(
  {
    content: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const programSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  lengthInWeeks: {
    type: Number,
    required: true,
  },
  daysPerWeek: {
    type: Number,
    required: true,
  },

  templates: [templateSchema],

  comments: [commentSchema],


});

module.exports = mongoose.model("Program", programSchema);
