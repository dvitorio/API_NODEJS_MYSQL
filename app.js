const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('alunos', 'root', '$Dvc314900*', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function(){
  console.log('Conexão realizada com sucesso!');
}).catch(function(err){
  console.log('Falha ao conectar com banco de dados: ' + err);
});


const Turma = sequelize.define('Turma', {
  codigo_turma: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
    quantidade_alunos: {
    type: Sequelize.INTEGER,
  },
    responsavel: {
    type: Sequelize.STRING,
  },
});

Turma.sync( {force: true});


//console.log(User === sequelize.models.User); 

