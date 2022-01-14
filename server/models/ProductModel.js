const mongoose = require('mongoose');
const ProductSchema = require('../schema/ProductSchema');

const Product = mongoose.model('productMan', ProductSchema);

module.exports = Product;
