const express = require('express');
const router = express.Router();
const controller = require('./controller/login_controller');

router.get('/login', controller.output.login);
router.post('/login', controller.process.login);
router.post('/logout', controller.process.logout);
router.get('/winmain', controller.output.winmain);
router.post('/member', controller.process.member);

module.exports = router;