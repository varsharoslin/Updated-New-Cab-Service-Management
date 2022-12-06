
const express = require('express');
const controller = require('../controller/bookingController')

const router = express.Router();



// router.get('/bookingcreate',controller.bookingget);
// router.post('/bookingcreate',controller.bookingpost);


router.get('/cabbooking', controller.cabBookingGet)
router.post('/cabbooking', controller.cabbookingPost)
router.get('/bookingindex', controller.cabBookingIndex)
// router.get('/deleteprofile/:id', controller.delete);


module.exports=router;