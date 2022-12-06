const express = require('express');
const controller = require('../controller/driverController');
const router = express.Router();
router.get('/driver',controller.driverget);