/*/
Un evénement est un signal qui permet d'indiquer que quelque chose est arrivé dans notre application. Plusieurs
classes dans Node JS produisent différents types d"évenements. Et dans notre code, la mission est de répondre si 
besoin à ces évenements. 
/*/


/*/
Pour mettre en place un évenement dans votre application qui signal que quelque chose est arrivé,
vous avez besoin de créer une sous classe de la classe EventEmitter. Cette nouvelle classe va donc 
heritée de de toutes les fonctionnalitées definies dans EventEmitter, mais on peut également ajouter
de nouvelles fonctionalitées comme le fait de pouvoir logger un message dans la console. Danc cette
classe on va pouvoir emettre un message en utilisant le mot clé 'this'. Lexicalement, la méthode log
appartient à la classe Logger, qui deveient donc son contexte d'invocation. Par définition en JavaScript
le mot clé this va donc référer à ce contexte. Et comme nous l'avons vu Logger hérite des fonctionnalitées
de EventEmitter. Dans ce cas this.emit peut être utilisé pour produire un signal 'messagelogged'. 
/*/

//On récupère le module events
//Il est important de préciser que cette fois ce n'est pas une fonction qui est retourné mais une classe. 
//On utilise donc une convention de nommage CamelCase pour le signaler (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
//Pour être utiliser il faut donc créer une instance de cette classe. 
const EventEmitter = require('events');

//On va créer Logger une sous classe de EventEmitter
class Logger extends EventEmitter {
    //On ajoute notre méthode custom
    log(message) {
        console.log(message);
        //On produit un signal 'messagelogged' une fois que le message est loggé
        this.emit('messagelogged');
    }
}
//On exporte notre classe Logger
module.exports = Logger;