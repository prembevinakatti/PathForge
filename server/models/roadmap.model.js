const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema({
  title: String,
  tasks: [String],
});

const monthSchema = new mongoose.Schema({
  month: String,
  icon: String,
  desc: String,
  items: [String],
  weeks: [weekSchema],
});

const roadmapSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  roadmap: [monthSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Roadmap", roadmapSchema);
