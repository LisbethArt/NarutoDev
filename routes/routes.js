const express = require('express');
const router = express.Router();
const charactersRoutes = require('./charactersRoutes');
const clanRoutes = require('./clanRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/characters', charactersRoutes);
router.use('/clans', clanRoutes);

module.exports = router;