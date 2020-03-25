//
// on demande à utiliser le module 'http'
// ça va nous permetre de creer un server
//
const http = require('http');
//
// on appele le fichier ou on a construi les pages 
//
const routes = require('./routes');
//
// on cree un server
// en utilisant les routes qu'on a cree
//
const server = http.createServer(routes.handler);
//
// on informe le port à ecouter
//
server.listen(3000);
//
//
//
//
//
// http || https
// http: unsecured, port 80, operates at application layer
// https: secured, port 443, operates at transport layer
// https requires SSL certificate that is signed by a CA (certificate authority)
//