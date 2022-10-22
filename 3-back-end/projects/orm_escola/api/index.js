const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

const rotas = {
  '/': 'ESCOLA F',
  '/pessoas': 'Entrei na pag de pessoas',
  '/niveis': 'Lista de níveis',
  '/sobre': 'Sobre',
}

app.get('/', (req, res) => {
  res.status(200).send('Escola');
})

app.get('/pessoas', (req, res) => {
  res.status(200).json('pessoas')
})

app.get('/niveis', (req, res) => {
  res.status(200).json('niveis')
})

app.get('/sobre', (req, res) => {
  res.status(200).json('sobre')
})

app.listen(port,() => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})