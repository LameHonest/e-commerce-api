const express = require('express');
const { getAllProducts, getProductById, createProduct } = require('../controllers/productController');

const router = express.Router();

router.route('/products')
  .get(getAllProducts)
  .post(createProduct);

router.route('/products/:id')
  .get(getProductById);

module.exports = router;
