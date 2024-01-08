// models/Manga.js

const mongoose = require('mongoose');

const MangaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  originalRun: {
    type: String,
    required: true
  },
  completed: {
    type: String
  },
});

module.exports = Manga = mongoose.model('backlog', MangaSchema, 'manga');