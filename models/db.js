const Sequelize = require('sequelize');

const sequelize = new Sequelize('alunos', 'root', '$Dvc314900*', {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = {
     Sequelize: Sequelize,
     sequelize: sequelize,
};