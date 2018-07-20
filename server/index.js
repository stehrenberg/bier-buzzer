const WebsocketServer = require('websocket').server;
const http = require('http');
const system = require('process');

const port = process.env.PORT || 8080;
const server = http.createServer();

let wsConnections = [];

var wsServer = new WebsocketServer({
  httpServer: server,
  autoAcceptConnections: false
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
    const connectionIndex = wsConnections.findIndex(wsConnection => wsConnection === connection);
    wsConnections = wsConnections.slice(connectionIndex, 1);
    console.log(`Connection to ${connection.remoteAddress} closed`);
  })
});

server.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});