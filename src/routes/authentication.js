const express = require('express');
const router = express.Router();

const { Login, Logout } = require('../controllers/v1/auth/authentication.controller');

// middleware that is specific to this router
router.use((req, res, next) => {
 next();
});

router.post('/login', Login);
router.post('/logout', Logout);

module.exports = router;