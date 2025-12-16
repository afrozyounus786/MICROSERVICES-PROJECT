const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validation = require('../middleware/validation.middleware');

router.get('/', authMiddleware['user'],cartController.getCart);

router.post('/items',
    validation.validateAddItemToCart,
    authMiddleware['user'],
    cartController.addIntemtoCart
);

router.patch("/items/:productId",
    validation.validateUpdateCartItem,
    authMiddleware['user'],
    cartController.updateCartItem
)

module.exports = router;