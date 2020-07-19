const express = require('express');
const router = express.Router();

const { GetMomories } = require('../controllers/v1/memories/memories.controller');
const { SearchMemory } = require('../controllers/v1/memories/search.controller');

router.use((req, res, next) => {
 next();
});

router.get('/', GetMomories);
router.get('/search', SearchMemory);

module.exports = router