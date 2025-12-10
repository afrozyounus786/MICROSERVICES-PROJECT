const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const validator = require('../middlewares/validator.middleware');
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', validator.registerValidationRules, authController.registerUser);
router.post('/login', validator.loginUserValidations, authController.loginUser);
router.get('/me', authMiddleware.authenticateToken, authController.getCurrentUser);
router.get('/logout', authController.logoutUser);
router.get('/users/me/addresses', authMiddleware.authenticateToken, authController.getUserAddresses);
router.post('/users/me/addresses', authMiddleware.authenticateToken,validator.addUserAddressesValidation, authController.addUserAddress);
router.delete('/users/me/addresses/:addressId', authMiddleware.authenticateToken, authController.deleteUserAddress);

module.exports = router;
