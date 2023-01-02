const mongoose = require("mongoose");
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 3 },
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
  comments: [commentSchema],
});

module.exports = mongoose.model("Program", programSchema);
