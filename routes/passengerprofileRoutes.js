const express = require('express');
const controller = require('../controller/passengerProfileController')

const router = express.Router();

router.get('/profile', controller.index);

router.get('/createprofile', controller.create);
router.post('/createprofile', controller.createPost);
router.get('/updateprofile/:id', controller.update);
router.post('/updateprofile/:id', controller.updatePost);

router.get('/deleteprofile/:id', controller.delete);

module.exports = router;
