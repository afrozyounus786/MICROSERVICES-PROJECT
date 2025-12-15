const express = require('express');
const createAuthMiddleware = require('../middleware/auth.middleware');
const productController = require('../controllers/product.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const { createProductValidators } = require('../validators/product.validator');
//POST api/products
router.post(
  '/',
  createAuthMiddleware(['seller', 'admin']),
  upload.array('images', 5),
  createProductValidators,
  productController.createProduct
);
//GET api/products
router.get('/', productController.getProducts);


router.patch('/:id' , createAuthMiddleware(['seller']), productController.updateProduct);
router.delete('/:id' , createAuthMiddleware(['seller']), productController.deleteProduct);

router.get("/seller",createAuthMiddleware(['seller']), productController.getSellerProducts);

//GET api/products/:id
router.get('/:id', productController.getProductById);

module.exports = router;
