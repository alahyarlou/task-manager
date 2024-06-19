const { Schema, default: mongoose } = require("mongoose");

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: String, required: true },
});

module.exports = mongoose.model("task", TaskSchema);
