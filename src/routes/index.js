const express = require('express');
const router = express.Router();

const HealthCheck = require('../controllers/HealthCheck.controller');
const ErrorHandler = require('../controllers/ErrorHandlerMiddleware');

const AuthRoutes = require('./authentication');
const MemoriesRoutes = require('./memories');

// middleware that is specific to this router
router.use((req, res, next) => {
 next();
});

router.get('/', HealthCheck);
router.use('/api/v1/user/auth', AuthRoutes);
router.use('/api/v1/memories', MemoriesRoutes);

// 404 Error handler
router.use(ErrorHandler.notFound);
// Generic Error Handler
router.use(ErrorHandler.generic);

module.exports = router;