const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please enter product description"]
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    min: [0, "Price cannot be negative"]
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide an image URL"]
  },
  category: {
    type: String,
    required: [true, "Please enter product category"]
  },
  stock: {
    type: Number,
    default: 1,
    min: [0, "Stock cannot be negative"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
