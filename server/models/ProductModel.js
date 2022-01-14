const mongoose = require('mongoose');
const ProductSchema = require('../schema/ProductSchema');

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
