const mongoose = require("mongoose");
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const templateSchema = new Schema({
  exercise: {
    type: Array,
    required: true,
  },
  weight: {
    type: Array,
    required: true,
  },
  sets: {
    type: Array,
    required: true,
  },
  reps: {
    type: Array,
    required: false,
  },
  day: {
    type: Number,
    required: true,
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
