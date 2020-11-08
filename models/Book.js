const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Please enter a valid title",
  },
  authors: {
    type: Array,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
