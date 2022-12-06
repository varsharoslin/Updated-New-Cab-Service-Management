const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Review = require('./review');

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

module.exports = driverassign;