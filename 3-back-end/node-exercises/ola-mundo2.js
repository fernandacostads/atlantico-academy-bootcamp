const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer(
    (req, resp) => {
        resp.statusCode = 200;
        resp.setHeader('content-type', 'text/plain');
        resp.end('Nosso segundo hello world em NodeJs!!!');
    });
server.listen(port, hostname, () => {
    console.log(`Servidor rodando na porta http://${hostname}:${port}/`);
});