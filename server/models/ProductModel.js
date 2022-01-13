const mongoose = require('mongoose');
const ProductSchema = require('../schema/ProductSchema');

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
