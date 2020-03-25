//
// on appelle le module "file system"
// que serv à manipuller des fichiers
//
const fs = require('fs');
//
// methode requestHandler
//
const requestHandler = (req, res) => {
    //
    // req = request
    // on demande les url chargés
    //
    const url = req.url;
    //
    // on demande les methodes utilisés
    //
    const method = req.method;
    //
    // console.log(req);
    //
    // si il l'url est "vide"
    //
    if (url === '/') {
        //
        // res = response 
        // ici on envoye le header
        //
        res.setHeader('Content-Type', 'text/html');
        //
        // ici on envoye le reste de la page
        //
        res.write('<html>');
        res.write('<head><title>Bienvenue</title></head>');
        res.write(
            '<body><form action="/test" method="POST"> <input type="text" name="message"/><button type="submit">Envoyer Message</button></form></body>'
        );
        res.write('</html>');
        //
        // ceci informe le server qu'on a fini de lire la page
        // ceci est obligatoire 
        //
        return res.end();
    }
    //
    // si on est sur la page test et le formulaire est envoyé
    //
    if (url === '/test' && method === 'POST') {
        //
        // on cree una array vide pour le body
        //
        const body = [];
        //
        //The on method binds an event to a object.
        //
        req.on('data', (chunk) => {
            //
            // chunk is a Buffer, which is Node's way of storing binary data.
            // ici on utilise un Buffer 
            // Buffers are objects used to represent binary data in the form of a sequence of bytes
            //
            console.log(chunk);
            body.push(chunk);
            //
            // on "push" le "chunk" à l'interieur de l'array body
            //
            console.log(body);
        });
        //
        // pour taper dans le buffer pour recuperer des trucs
        // sur notre requete "on"
        // on utilise "end" qui est la meme chose que return res.end()
        // avec une methode sans parametres
        //
        return req.on('end', () => {
            //
            // on cree une constante appellé parsedBody
            // et on l'attribue cette methode 
            // pour transformer l'info qu'on avez recuperé
            // en string
            //
            const parsedBody = Buffer.concat(body).toString();
            //
            // to parse: to analyse (a string or text) into logical syntactic components.
            // Parsing means analyzing and converting a program into an internal format that 
            // a runtime environment can actually run, for example the JavaScript engine inside browsers.
            //
            console.log(parsedBody);
            //
            // la reponse sera: message=[string recuperé]
            // on la "split" à partir de "="
            // ce que cree un tableau
            // et on recupere la 2° partie du tableau [1]
            // donc le message
            // 
            const message = parsedBody.split('=')[1];
            //
            // et on cree un fichier txt avec le contenue du message
            // (juste pour tester)
            // le (err) serv au cas ou on a une erreur
            // (parametre obligatoire)
            //
            fs.writeFile('message.txt', message, (err) => {
                //
                // dans le cas d'un erreur
                // on reçois ce status code
                //
                res.statusCode = 302;
                //
                // et cette page
                //
                res.setHeader('location', '/');
                return res.end();
            });
        });
    }
    //
    // ceci est le "else"
    // si on essaye d'aller sur une autre page,
    // on reçoi un erreur 404
    //
    res.statusCode = 404;
    //
    // on construie la page d'erreur
    //
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Erreur 404</title></head>');
    res.write('<body><h1>Erreur 404</h1></body>');
    res.write('</html>');
    return res.end();
};
//
// on exporte la methode pour pouvoir l'utiliser ailleurs 
//
exports.handler = requestHandler;