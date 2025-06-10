const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    if (req.query.category) {
      const products = await Product.find({ category: req.query.category });
      return res.status(200).json({
        success: true,
        count: products.length,
        products
      });
    }

    const products = await Product.find();
    
    res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    next(error);
  }
};

// Get single product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product not found with id: ${req.params.id}`
      });
    }

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    next(error);
  }
};

// Create new product
exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;

    if (!name || !price || !description || !category || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, price, description, category, imageUrl'
      });
    }


    const product = await Product.create(req.body);

    res.status(201).json( {
      success: true,
      product
    });
  } catch (error) {
    next(error);
  }
};
