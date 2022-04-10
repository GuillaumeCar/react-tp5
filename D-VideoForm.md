<img src="images/readme/header-small.jpg" >

# D. VideoForm <!-- omit in toc -->

_**Maintenant que l'on est capables de récupérer des informations de la bdd avec des requêtes GET, voyons comment envoyer des informations en POST par l'intermédiaire d'un formulaire non contrôlé.**_

## Sommaire <!-- omit in toc -->
- [D.1. Création du formulaire](#d1-création-du-formulaire)
- [D.2. Gestion du formulaire](#d2-gestion-du-formulaire)

## D.1. Création du formulaire

1. **Créez un nouveau composant `VideoForm`** dont le render retournera le code HTML suivant :
	```html
	<form class="videoForm">
		<label for="title">Titre</label>
		<input
			required
			type="text"
			id="title"
		/>
		<label for="description">Description</label>
		<textarea
			required
			id="description"
			cols="30"
			rows="10"
		></textarea>
		<label for="thumbnail">
			Vignette
			<small>
				&nbsp;id de l'image sur &nbsp;
				<a href="https://unsplash.com" target="_blank">
					https://unsplash.com
				</a>
			</small>
		</label>
		<input
			required
			type="text"
			id="thumbnail"
		/>
		<button type="submit">Envoyer</button>
	</form>
	```
	> _**NB :** Vous aurez remarqué qu'il n'y a pas de champ pour l'upload du champ `file`. En effet le fichier vidéo sera choisi au hasard côté serveur au moment de l'enregistrement en bdd. Cela nous permet de ne pas nous embêter dans ce TP avec de l'upload de fichiers via une requête multipart et sa [syntaxe un peu complexe](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Uploading_a_file)_
2. **Ajoutez cet écran dans le `Navigator` avec un identifiant de route associé** (_pour `VideoList` on avait `'list'`, pour `VideoDetail` on avait `'detail'`, je vous propose donc pour `VideoForm` de partir sur... `'form'`, original non ?_)
3. **Affichez `VideoForm` par défaut au chargement de l'appli en modifiant le `state` par défaut du `Navigator`**

## D.2. Gestion du formulaire
1. **A l'aide de la technique des composants non-contrôlés** (_cf. pdf du cours_) faites en sorte d'afficher dans la console les valeurs saisies par l'utilisateur lorsqu'il soumet le formulaire (touche <kbd>Entrée</kbd> ou click sur le bouton "Envoyer")
2. **Une fois les valeurs récupérées, envoyez une requête POST vers le webservice http://localhost:8080/api/videos** (_cf. documentation de fetch avec POST : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#Corps_)

	> _**NB :** Pour envoyer vos données dans le `body` de votre `fetch`, il faut que ces données soient **encodées sous forme de chaîne de caractères JSON**. Pensez donc à utiliser `JSON.stringify()` autour de l'objet que vous souhaitez envoyer dans le `body` !_
3. **Enfin, quand l'enregistrement en bdd a été effectué par le webservice, et si aucune erreur n'a été remontée, alors redirigez l'utilisateur vers la page liste, en principe la nouvelle vidéo doit y apparaître !**


## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, passez à la partie : [E. Perfectionnement](E-perfectionnement.md).