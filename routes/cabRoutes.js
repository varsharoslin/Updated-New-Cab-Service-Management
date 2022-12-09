const express = require('express');
const controller = require('../controller/cabController');

const router = express.Router();

router.get('/cabs', controller.index);

router.get('/createcab', controller.create);
router.post('/createcab', controller.createPost);

router.get('/updatecab/:id', controller.update);
router.post('/updatecab/:id', controller.updatePost);

router.get('/deletecab/:id', controller.delete);


module.exports = router;