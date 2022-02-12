const mongoose = require('mongoose');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
  }));

  module.exports = Course;