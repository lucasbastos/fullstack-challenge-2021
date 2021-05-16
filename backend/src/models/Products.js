const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = Schema({
  code: {
    type: Number,
    required: true,
  },
  barcode: {},
  status: {},
  imported_t: {
    type: Date,
    default: Date.now(),
  },
  url: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  packaging: {
    type: String,
    required: true,
  },
  brands: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
