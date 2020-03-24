
// on appelle le module "file system"
const fs = require('fs');

const requestHandler = (req, res) => {
    // on demande l'url
    const url = req.url;
    // on demande la methode
    const method = req.method;

    // si il l'url est "vide"
    if (url === '/') {
        // res = response 
        // c'est une reponse http
        // ici on envoye le header
        res.setHeader('Content-Type', 'text/html');
        // ici on envoye le reste de la page
        res.write('<html>');
        res.write('<head><title>Bienvenue</title></head>');
        // ici on cree le formulaire q'on va ecouter plus tard
        res.write(
            '<body><form action="/test" method="POST"> <input type="text" name="message"/><button type="submit">Envoyer Message</button></form></body>'
        );
        res.write('</html>');
        // ceci informe le server qu'on a fini de lire la page
        // ceci est obligatoire 
        return res.end();
    }

    // si on est sur la page test et le formulaire est envoyé
    if (url === '/test' && method === 'POST') {
        // on cree una array vide pour le body
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            console.log(body);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        });
    }
    // ceci est le "else"
    // si on essaye d'aller sur une autre page,
    // on reçoi un erreur 404
    res.statusCode = 404;
    // on construie la page d'erreur comme la landing page
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Erreur 404</title></head>');
    res.write('<body><h1>Erreur 404</h1></body>');
    res.write('</html>');
    return res.end();
};

// ceci permet d'exporter le code vers un outre doccument 
exports.handler = requestHandler;