// models/Todo.js
// const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     completed: { type: Boolean, default: false }
// }, { timestamps: true });

// module.exports = mongoose.model('Todo', todoSchema);


const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Todo', todoSchema);
