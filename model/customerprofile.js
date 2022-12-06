const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Review = require('./review');

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

module.exports = customerprofile;