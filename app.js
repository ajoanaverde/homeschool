// on demande à utiliser le module 'http'
const http = require('http');
// on appele le fichier ou on a construi les pages 
const routes = require('./routes');

//on cree un server 
const server = http.createServer(routes.handler);

// informe le port à ecouter
server.listen(3000);
