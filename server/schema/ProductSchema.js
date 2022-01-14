const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  _id: String,
  title: String,
  imageUrl: String,
  desc: String,
  price: Number,
  sizes: [String],
});

module.exports = ProductSchema;
