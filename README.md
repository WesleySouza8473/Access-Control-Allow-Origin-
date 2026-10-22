# Entrega 2: CORS e Preflight

**Estudante:** WESLEY DOS SANTOS DE SOUZA

**RA:** 2025104728

## Executar

Inicie cada comando em um terminal separado, na raiz do projeto:

```sh
node api/server-api.js
node client/server-client.js
```

Abra `http://localhost:3000` no navegador. No Codespaces, abra a porta 3000 e
use a URL encaminhada pelo ambiente. A API calcula a origem permitida a partir
do nome do Codespace; fora dele, usa `http://localhost:3000`. Também é possível
informar uma origem exata com `CLIENT_ORIGIN`.

Clique em **Executar Requisição**. O cabeçalho `X-Identificador-Estudante`
provoca o preflight `OPTIONS`; a API não libera esse método, então o navegador
exibe a falha esperada da atividade. O GET `/dados` responde com o cabeçalho
`Access-Control-Allow-Origin` para a origem explícita do cliente.