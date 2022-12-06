const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Review = require('./review');

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
    }
});

// Movie.hasMany(Review)
module.exports = newcabdetails;