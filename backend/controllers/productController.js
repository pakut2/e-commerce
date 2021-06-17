import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

// @route   GET api/products
// @desc    GET all products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @route   GET api/products/:id
// @desc    GET product by id
// @access  public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export { getProducts, getProductById };
