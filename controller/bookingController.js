const { Driverprofile } = require('../model/cab');
const bookings = require('../model/cab').Booking;
const db = require("../model/cab")

module.exports.cabBookingGet = (req, res, next)=>{
    res.render('cabbooking');
}

module.exports.cabbookingPost = async (req, res, next)=>{
    const {firstName,lastName,address,pickup,dropoff,passengers,pickuptime,email,bookingdate,choosecab} = req.body;
    let booking = await bookings.findOne({
        where: {
            email: email
        }
    });
    console.log(req.session);
    if(booking){
        return res.render('cabbooking', {message: 'Already booked.'});
    }
    var driver = await Driverprofile.findOne();
    const result = await bookings.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        pickup: req.body.pickup,
        dropoff: req.body.dropoff,
        passengers: req.body.passengers,
        pickuptime: req.body.pickuptime,
        email: req.body.email,
        phone: req.body.phone,
        bookingdate: req.body.bookingdate,
        choosecab: req.body.choosecab,
        UserId : req.session.userId,
        DriverId : driver.dataValues.id
    });

    res.redirect('/payment/'+result.id);
}
module.exports.cabBookingIndex = (req, res, next) => {
    bookings.findAll().then(bookingsFromDb => {
        // console.log(cabdetails)
        res.render('cabbooking-index', {
            data: bookingsFromDb,
            identity: req.identity.user
        });
    })
}


module.exports.invoice = (req, res, next) => {
    let id = req.params.id;
    db.Booking.findByPk(id)
        .then(cabbooking => {
            console.log(cabbooking)
            res.render('invoice', {
                    
                pickup: cabbooking.pickup,
                dropoff: cabbooking.dropoff

            })
        });
}