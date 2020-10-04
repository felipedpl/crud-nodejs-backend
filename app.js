// dependencia express
const express = require('express');
// dependencia body-parser
const bodyParser = require('body-parser');
// inicializar express
const app = express();

let port = 5000;

// pega variavel de ambiente se informada, senão pega da variável port
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta ' + port);
});

app.get('/', function(req, res) {
    res.send('ENDPOINT inválido');
});

app.use(bodyParser.json());

//url começando por /api chamam as rotas em routes
const routes = require('./routes/api');
app.use('/api', routes);