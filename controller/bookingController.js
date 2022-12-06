const bookings = require('../model/cabbooking');


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

    if(booking){
        return res.render('cabbooking', {message: 'Already booked.'});
    }

    await bookings.create({
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
        choosecab: req.body.choosecab
        
        

    });

    res.redirect('/bookingindex');
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
