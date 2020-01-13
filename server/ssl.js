const WebsocketServer = require('websocket').server;
const http = require('http');
const system = require('process');

const port = process.env.PORT || 8080;
const server = http.createServer();

let wsConnections = [];

var wsServer = new WebsocketServer({
  httpServer: server,
  autoAcceptConnections: false,
  ssl: true,
  ssl_key: "/srv/letsencrypt/certs/gamespodcast.de/privkey.pem",
  ssl_cert: "/srv/letsencrypt/certs/gamespodcast.de/chain.pem"
});

wsServer.on('request', request => {
  const connection = request.accept();
  console.log(`Connection from ${connection.remoteAddress} accepted`);
  wsConnections.push(connection);

  connection.on('message', message => {
    if (!message.utf8Data) {
      return;
    }

    wsConnections.forEach(wsConnection => {
      wsConnection.sendUTF(message.utf8Data);
    })
  });

  connection.on('close', () => {
    console.log(`Connection to ${connection.remoteAddress} closed`);
  })
});

server.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});