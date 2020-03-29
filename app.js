//
// NEW CODE (jour 3)
//
const http = require('http');
const path = require('path');
//
// on appelle le module d'express
//
const express = require('express');
//
// body-parser sert a recuperai des contenues 
//
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const libraryRoutes = require('./routes/library');
//
// on lance express
//
const app = express();
//
//Ceci sont des middlewhere
//
// cela permet de recuper des contenues dans un object
//
app.use(bodyParser.urlencoded({ extended: true }));
//
app.use(express.static(path.join(__dirname, 'public')));
//
app.use('/admin', adminRoutes);
app.use(libraryRoutes);
//
// ceci est un middlewhere
//
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
//
//
app.listen(3000);
//
//
//
// OLD CODE (jour 1-2)
//
// on demande à utiliser le module 'http'
// ça va nous permetre de creer un server
//
////const http = require('http');
//
// on appele le fichier ou on a construi les pages 
//
////const routes = require('./routes');
//
// on cree un server
// en utilisant les routes qu'on a cree
//
////const server = http.createServer(routes.handler);
//
// on informe le port à ecouter
//
////server.listen(3000);
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