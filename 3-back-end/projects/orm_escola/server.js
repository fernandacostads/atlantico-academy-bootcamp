const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);

})

const rotas = {
  '/': 'ESCOLA',
  '/pessoas': 'Entrei na pag de pessoas',
  '/niveis': 'Lista de níveis',
  '/sobre': 'Sobre'
}

server.listen(port,() => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})