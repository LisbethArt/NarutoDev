const express = require('express');
const router = express.Router();
const clansController = require('../controllers/clansController');

router.get('/', clansController.getNarutoData);

module.exports = router;