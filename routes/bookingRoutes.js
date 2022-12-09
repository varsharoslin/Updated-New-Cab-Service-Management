const express = require('express');
const controller = require('../controller/bookingController')

const router = express.Router();

router.get('/cabbooking', controller.cabBookingGet)
router.post('/cabbooking', controller.cabbookingPost)
router.get('/bookingindex', controller.cabBookingIndex)
router.get('/invoice/:id', controller.invoice)


module.exports=router;