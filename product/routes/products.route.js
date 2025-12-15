const express = require('express');
const createAuthMiddleware = require('../middleware/auth.middleware');
const productController = require('../controllers/product.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const { createProductValidators } = require('../validators/product.validator');

router.post(
  '/',
  createAuthMiddleware(['seller', 'admin']),
  upload.array('images', 5),
  createProductValidators,
  productController.createProduct
);

module.exports = router;
