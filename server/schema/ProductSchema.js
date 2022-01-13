const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  id: String,
  title: String,
  imageUrl: String,
  desc: String,
  price: Number,
  sizes: [String],
});

module.exports = ProductSchema;
