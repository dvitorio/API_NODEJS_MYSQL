//Importação dos módulos
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
const alunos = require('./models/Alunos');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Template
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Rotas
app.get('/', (req, res)=>{
  res.send('ESCOLA FONTE DO SABER');
});

app.get('/alunos', (req, res)=>{
  res.render('alunos');
});

app.post('/alunos', (req, res)=>{
  alunos.create({
    matricula: req.body.matricula,
    nome: req.body.nome,
    email: req.body.email
  }).then(function(){
    res.send("Aluno cadastrado com sucesso");
  }).catch(function(err){
    res.send('Erro: aluno não foi cadastrado!' + err);
  });
});


//Porta que está sendo 'escutada'
app.listen(3030, ()=>{
  console.log('Servidor rodando na url http://localhost:3030');
});
