const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Review = require('./review');

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
    }
    
    
});

module.exports = booking;