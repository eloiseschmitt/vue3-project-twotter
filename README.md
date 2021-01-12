# twotter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Notes
- type & required peuvent être ajoutés aux properties sous forme d'objet
- attribut scoped dans la balise style garantit que les classes ne seront utilisées que pour le composant
-> ajoute "[data-v-unnumero]" à la fin des classes
- Appeler un fichier de styles de base => creer à la racine un fichier vue.config.js et lui indiquer le chemin du fichier de base (voir fichier en exemple)
- Supprimer le # dans l'url après l'installation de router => 
- dans router/index.js, remplacer createWebHashHistory par createWebHistory

## Dépendances installées pour le tuto:
- node-sass
- sass-loader
- vue-router (attention ! l'installation de vue-router modifie le fichier App.vue)

## Spécifs Vue 3
- Composition API
- Import reactive from vue
- Ajouter setup()
- Créer un objet (nommé 'state' dans ce projet) reactive
- return cet objet
- On se réfère aux data maintenant avec state.leNomDeLaData
- Pour les f° computed, import computed
- créer un object computed
- retourner cet objet
- les methodes sont maintenant des fonctions basique js retournées également
- specif pour les $emit (ex:this.$emit("add-twoot", this.newTwootContent);)=> ajouter props et ctx dans les arguments de setup
- et remplacer le this par ctx et supprimer le $ (ex: ctx.emit("add-twoot", state.newTwootContent))
