const express = require('express');
const controller = require('../controller/adminController');

const router = express.Router();
router.get('/admin',controller.adminget);

module.exports = router;