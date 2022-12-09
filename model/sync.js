const {User, Booking, cabdetails,Customerprofile,Driverassign,Driverprofile,Passengerprofile} = require('./cab');

User.hasMany(Booking,{
    foreignKey :"UserId",
    sourceKey :"id"
})

Booking.belongsTo(User,{
    foreignKey :"UserId",
    targetKey :"id"
})

Driverprofile.hasMany(Booking,{
    foreignKey :"DriverId",
    sourceKey :"id"
})

Booking.belongsTo(Driverprofile,{
    foreignKey :"DriverId",
    targetKey :"id"
})

Driverprofile.hasMany(cabdetails,{
    foreignKey :"DriverId",
    sourceKey :"id"

})
cabdetails.belongsTo(Driverprofile,{
    foreignKey :"DriverId",
    targetKey :"id"
})



Driverprofile.sync()
cabdetails.sync()
Passengerprofile.sync();
Customerprofile.sync();
Booking.sync()
User.sync()
Driverassign.sync();


