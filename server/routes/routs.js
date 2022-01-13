const Product = require('../models/ProductModel');
const express = require('express');
const router = express.Router();

router.get('/api/products', async (req, res) => {
  const Products = await Product.find();
  res.send(Products);
});
router.post('/api/products', async (req, res) => {
  const newProduct = Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});
router.delete('/api/products/:id', async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
