module.exports.add = function(a, b) { return a + b };

module.exports.multiply = function(a, b) { return a * b};

/*/
L'objectif ici est de créer notre premier petit package, de le publier et de pouvoir l'utiliser dans un autre dossier.
On va créer une fonction très simple qui va permettre d'ajouter deux nombres. 
Puis on va ajouter une fonction pour multiplier et mettre à jour notre package en fonction des règles major/minor/patch.
Pour s'identifier depuis la console: npm login 
Pour publier un package: npm publish
Pour mettre à jour la version: npm version major/minor/patch
/*/