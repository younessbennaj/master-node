/*/
Le module http est utilisé pour créer des programmes réseau. Ces programmes et les protocoles qu'ils utilisent incluent HTTP.

/*/

const http = require('http');

//Voici un exemple très simpme de création de serveur web avec NodeJS 
//On va créer une nouvelle instance de la classe http.Server
//server est une instance de EventEmitter il possède donc toutes les fonctionnalitées de ce dernier
//C'est pour cela que l'on dit que beaucoup de fonctionnalité de base de NodeJS sont basées sur EventEmitter
const server = http.createServer((req, res) => {
/*/La méthode prend en argument ce qu'on appelle le 'requestListener', qui va nous permettre d'emettre à chaque connection, 
une nouvelle instance de http.IncomingMessage (req) et de http.ServerResponse (res), que l'on va utiliser pour faire 
dialoguer notre client et notre serveur. 
/*/

/*/
Voici le fonctionnement: 
Notre serveur est actuellement en écoute sur le port 3000. A chaque fois qu'une connection est faite sur le port 3000,
une requête est émise. Cette requête est un  object complèxe que l'on ne va détailler ici pour le moment. Ce qui nous
intéresse ici est la propriété "url" de notre requête. Lorque l'on va entrer dans notre navigateur l'url 'localhost:3000',
notre req.url aura la forme '/'. Notre objectif dans le code est donc d'emmetre une réponse à cette requête grâce à notre
object response. 
/*/ 

    //On créer ici plusieurs route à notre serveur

    //Si url = '/' (localhost:3000)
    if(req.url === '/') {
        res.write('Hello world !');
        //Cette methode signale au serveur que la totalité entêtes et corps de la réponse ont été envoyé
        res.end();
    }

    //Si url = '/api/courses' (localhost:3000/api/courses)
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        //Cette methode signale au serveur que la totalité entêtes et corps de la réponse ont été envoyé
        res.end();
    }
});

//L'évenement 'connection' est produit lorque qu'un client écoute sur le port que l'on définie plus bas
// server.on('connection', (socket) => {
//     console.log('new connection');
// })

//Indique ce serveur écoute sur le port 3000 - si un client écoute sur ce port, l'évenement 'connection' va être propagé.
server.listen(3000);

console.log('Listening on port 3000...');

/*/Concevoir un serveur web avec Node JS est donc très simple à mettre en place. Cependant pour des cas d'usages réel,
notament en production, nous n'allons pas utiliser ce module http pour concevoir nos services backend pous nos
applications. En effet plus on ajouter de routes, et plus notre code va devenir complèxe et très dur à maintenir. Nous 
allons donc préférer utiliser le framework Express que va donner à notre application une structure claire et propre, pour
pouvoir gérer plusieurs routes. Cependant il faut garder en tête qu'a l'intèrieur d'express la logique est conçu sur le
fonctionnement du module http et c'est pourquoi il est nécessaire de comprendre son fonctionnement./*/