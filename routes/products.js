const express = require("express");

const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controllers/product");

const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
