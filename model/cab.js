const sequelize = require('./db');
const {DataTypes} = require('sequelize');
// const review = require('./review');
// const Movie = require('./cabdetails');
const booking = sequelize.define('cabbooking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
    },
    pickup: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dropoff: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    passengers: {
        type: DataTypes.INTEGER(50),
        allowNull: false
    },
    pickuptime: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    bookingdate: {
        type: DataTypes.DATE(6),
        allowNull: false
    },
    choosecab: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    UserId : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    DriverId : {
        type : DataTypes.INTEGER,
        allowNull : true,
        references: {
            model: this.Driverprofile,
            key: 'id'
        }
    }
       
});

const newcabdetails = sequelize.define('newcabdetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cabName: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    cabType: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cabCapacity: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    cabDescription: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    adddriver: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    DriverId : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
   
});


const customerprofile = sequelize.define('customerprofile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(50),
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});



const driverassign = sequelize.define('driverassign', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cabName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    driverName: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

const driverprofile = sequelize.define('driverprofile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(50),
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    license: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
 
});

const passengerprofile = sequelize.define('passengerprofile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    number: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports = {
    Booking : booking,
    cabdetails : newcabdetails,
    Customerprofile : customerprofile,
    Driverassign : driverassign,
    Driverprofile : driverprofile,
    Passengerprofile : passengerprofile,
    User : User
}

