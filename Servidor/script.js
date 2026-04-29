<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// CONFIGURAÇÕES
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

// SERVIDOR
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});


// 🔵 ROTA INICIAL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Aula07/aula.html');
});


// 🟢 FORM GET
app.get('/inicio', (req, res) => {
    const text = req.query.text;
    const num = req.query.num;
    const date = req.query.date;
    const color = req.query.color;
    const password = req.query.password;

    console.log("GET:");
    console.log(text, num, date, color, password);

    res.send("Dados recebidos via GET");
});


// 🟣 FORM POST
app.post('/inicio', (req, res) => {
    const text = req.body.text;
    const num = req.body.num;
    const date = req.body.date;
    const color = req.body.color;
    const password = req.body.password;

    console.log("POST:");
    console.log(text, num, date, color, password);

    res.send("Dados recebidos via POST");
});


// 🔴 CADASTRO
app.post('/cadastro', (req, res) => {
    const nome = req.body.nome;
    const login = req.body.login;
    const senha = req.body.senha;

    console.log("CADASTRO:");
    console.log(nome, login, senha);

    res.render('resposta', {
        resposta: "cadastrado com sucesso"
        
    });
});


=======
var http = require("http");
var express = require("express");
var app = express();
app.use(express.static('./public'));
var server = http.createServer(app);
server.listen(3000);
console.log("Servidor rodando...")
>>>>>>> 5957029e17d5a932fb706a6418d8d139e4f1018b
