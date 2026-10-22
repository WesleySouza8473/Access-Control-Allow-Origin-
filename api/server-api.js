const http = require('http');

const PORT = 8080;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || (
  process.env.CODESPACE_NAME && process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
    ? `https://${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
    : 'http://localhost:3000'
);

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/dados') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': CLIENT_ORIGIN
    });
    res.end(JSON.stringify({
      matricula: '2025104728',
      nome: 'WESLEY DOS SANTOS DE SOUZA',
      status: 'dados_sensiveis'
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ erro: 'Nao encontrado' }));
}).listen(PORT, () => {
  console.log(`[API] Servidor ativo na porta ${PORT}; origem permitida: ${CLIENT_ORIGIN}`);
});