
const driver = require('../model/driverassign');


module.exports.driverassignget  = (req, res, next)=>{
    res.render('driverassign');
}
module.exports = driver;