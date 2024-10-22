const express = require('express');
const router = express.Router();
const clansController = require('../controllers/clansController');

router.get('/', clansController.getClans);
router.get('/:id', clansController.getClanById);

module.exports = router;