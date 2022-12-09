const driver = require('../model/cab').Driverassign;

module.exports.driverassignget  = (req, res, next)=>{
    res.render('driverassign');
}
module.exports = driver;