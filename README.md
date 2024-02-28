# checkIdFormat - middleware pour Node.js
checkIdFormat, permet de vérifier si une chaîne donnée correspond au format d'ID ObjectId de MongoDB


## installation
Placer le fichier checkIdFormat.js dans le dossier middlewares


## utilisation
Dans le fichier, ajouter sur la première ligne
```
const { checkIdFormat } = require('./checkIdFormat')
```

Exemple d'utilisation
```
// vérifier si l'id est au bon format
if(!checkIdFormat(id)) return res.json({ result: false, message: 'ID invalide' })
```
