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

module.exports = router;
