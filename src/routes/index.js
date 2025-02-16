const express = require('express');
const router = express.Router();
const controller = require('./controller/login_controller');

router.get('/login', controller.output.login);
router.post('/login', controller.process.login);

module.exports = router;