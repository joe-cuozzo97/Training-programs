const mongoose = require("mongoose");
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const oneFullWeekSchema = new Schema({
day1:{
  type:String,
  required: true,
},
day2:{
  type:String,
  required: true,
},
day3:{
  type:String,
  required: true,
},
day4:{
  type:String,
  required: false,
},
day5:{
  type:String,
  required: false,
},
})



const templateSchema = new Schema({
  exercise: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
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

  oneFullWeek: [oneFullWeekSchema],
});

module.exports = mongoose.model("Program", programSchema);
