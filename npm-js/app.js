/*/
package.json est un fichier json qui va contenir des inforamations basiques de votre application ou de votre projet comme
son nom, son numero de version, les auteurs, l'adresse du dépôt git, des dépendances, etc...

commande rapide: npm init --yes

{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "underscore": "^1.9.1"
  }
}

Carret et Tilde: 

Lorsque l'on regarde dans notre fichier package.json au niveau des dependances on peut voir apparaitre les caractères ^ et ~.
Ils permettent de spécifier à npm quel numero de version on souhaite: 
- Pour ^ on précise que l'on veut le numero de version le plus récent tant que la Major est respecté (1.x.x)
- Pour ~ on précise que l'on veut le numéro de version le plus récent tant que la Major et la Minor sont réspecté (1.9.x)
- Si aucun des deux caractères n'est présent c'est que l'on souhaite l'exacte version du package donc Major, Minor et Patch (1.9.1) 

lister les dependances: npm list
lister les dépendances directes: npm list --depth=0

Pour obtenir une vue detaillé d'un package depuis le terminal: npm view mongoose 
Pour obtenir les dépendances du package en question: npm view mongoose dependencies

Permet de voir les packages qui se sont pas à la dernière version: npm outdated 

Pour mettre à jour nos packages avec la dernière version souhaité (selon Carret et Tilde): npm update

Lorsque l'on install un nouveau package, une nouvelle dépendance est ajoutée. Donc lorsque l'on va lancer "npm install",
npm va télécharger la dernière version du package présent dans les dépendances et la les stocker dans le dossier 
"node_modules".
/*/

var _ = require('underscore');

/*/
Lorsque l'on utlise 'require', node va d'abord regarder si il s'agit un core module (built-in module). Si ce n'est pas le cas
il va vérifier si c'est un fichier ou un dossier de notre app. Enfin il va regarder dans le node_module (on peut voir ça en 
loggant module.paths dans la console).
/*/
