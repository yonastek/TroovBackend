const Product = require("../models/Product");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

//@desc Get all products
//@route GET /api/v1/products
//@access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

// @desc      Get single product
// @route     GET /api/v1/products/:id
// @access    Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: product });
});

// @desc      Create new product
// @route     POST /api/v1/products
// @access    Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  const obj = await Product.create(req.body);
  res.status(201).json({ success: true, data: obj });
});

//@desc update product
//@route GET /api/v1/products/:id
//@access private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(
      new ErrorResponse(`product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: product,
  });
});

//@desc delete products
//@route GET /api/v1/products/:id
//@access public
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product) {
    new ErrorResponse(`productnot found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({
    success: true,
    msg: `${req.body.name} is deleted succesfully`,
  });
};
