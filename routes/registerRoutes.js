const express = require('express');
const controller = require('../controller/cabdetailsController')

const router = express.Router();
// router.get('/registercreate', controller.create);
// router.post('/registercreate', controller.createPost);


router.get('/registercreate',controller.registerget);
router.post('/registercreate',controller.registerpost);


router.get('/registerprofile', controller.usersGet)

router.get('/deleteprofile/:id', controller.delete);


module.exports=router;