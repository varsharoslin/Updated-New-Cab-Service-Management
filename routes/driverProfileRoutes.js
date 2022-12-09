const express = require('express');
const controller = require('../controller/driverProfileController')

const router = express.Router();
router.get('/drivercreate', controller.create);
router.post('/drivercreate', controller.createPost);
router.get('/driverprofile', controller.index);
router.get('/driverupdate/:id', controller.update);
router.post('/driverupdate/:id', controller.updatePost);

router.get('/driverdelete/:id', controller.delete);

module.exports = router;
