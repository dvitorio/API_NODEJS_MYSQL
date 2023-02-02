const db = require('./db');

const Alunos = db.sequelize.define('alunos', {
     maticula: {
          type: db.Sequelize.INTEGER,
     },
     nome: {
          type: db.Sequelize.STRING,
     },
     email: {
          type: db.Sequelize.STRING
     }
});

//Alunos.sync( {force: true});

module.exports = Alunos;