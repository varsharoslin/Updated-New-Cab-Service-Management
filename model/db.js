const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("newcab", "root", "shiny@08", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;