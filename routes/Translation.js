const express = require('express');
const router = express.Router();
const translationController = require('../controllers/TranslationController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, translationController.translateText);

module.exports = router;