const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  assignee: { type: String, required: true }, // Team member assigned to the task
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  project: { type: String, required: true }, // Project name or ID
  dueDate: { type: Date },
  milestones: [{ type: String }], // Array of milestone descriptions
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
