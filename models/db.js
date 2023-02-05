const Sequelize = require('sequelize');

const sequelize = new Sequelize('escola', 'root', '$Dvc314900*', {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = {
     Sequelize: Sequelize,
     sequelize: sequelize,
};