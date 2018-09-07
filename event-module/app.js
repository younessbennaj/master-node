/*/
Pour mettre en place un évenement dans votre application qui signal que quelque chose est arrivé,
vous avez besoin de créer une sous classe de la classe EventEmitter. Cette nouvelle classe va donc 
heritée de de toutes les fonctionnalitées definies dans EventEmitter, mais on peut également ajouter
de nouvelles fonctionalitées comme le fait de pouvoir logger un message dans la console. Danc cette
classe on va pouvoir emettre un message en utilisant le mot clé 'this'. 

Resultat ici on va donc ne plus faire appel à une instance de EventEmitter mais à une instance d'une de
ses sous classes que l'on a crée, c'est à dire Logger. 
/*/

// On récupère notre module logger qui est la classe Logger
const Logger = require('./logger');

//On va créer une nouvelle instance de Logger
const logger = new Logger;

//On ajoute notre event listener en attente du signal 'messagelogged'
logger.on('messagelogged', function() {
    //On log un message dans la console
    console.log('Listener called');
});

//On appelle notre méthode log, fonctionnalité custom que nous avions crée lors de l'instanciation de notre classe Logger
//Toutes ses sous classe en hérite
logger.log('Hello World');

