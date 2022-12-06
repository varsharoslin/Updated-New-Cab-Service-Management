const user = require('./user');
const movie = require('./cabdetails');
const review = require('./review');
const customerprofile = require('./customerprofile');
const cabbooking = require('./cabbooking');
const passengerprofile = require('./passengerprofile');
const driverassign = require('./driverassign');
const driverprofile = require('./driverprofile');
// movie.hasMany(review);
// review.belongsTo(movie, {
//     onDelete: 'CASCADE',
// });

// user.sync({alter: true});
// movie.sync({alter: true});
// review.sync({alter: true});
// movie.sync({alter: true});
// customerprofile.sync({alter: true});
 cabbooking.sync({alter: true});
// passengerprofile.sync({alter: true});
// driverassign.sync({alter: true});
// driverprofile.sync({alter: true});