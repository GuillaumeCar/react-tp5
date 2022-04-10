<img src="images/readme/header-small.jpg" >

# E. Perfectionnement <!-- omit in toc -->

_**Notre application commence à prendre forme : on est capables de lire et d'écrire dans la base de données, c'est déjà pas mal !**_

_**En revanche il reste un certain nombre de choses qui sont encore en dur dans le code et que l'on doit dynamiser. <br>C'est parti !**_

## Sommaire <!-- omit in toc -->
- [E.1. VideoDetail](#e1-videodetail)
- [E.2. Redirection VideoForm -> VideoDetail](#e2-redirection-videoform-videodetail)
- [E.3. API likes/dislikes](#e3-api-likesdislikes)


## E.1. VideoDetail

**En vous inspirant de ce que vous avez fait à la partie [B. AJAX](B-ajax.md) dans la `VideoList`, connectez le composant `VideoDetail` au webservice http://localhost:8080/api/videos/:id** (_ou `:id` correspond à l'id de la vidéo à afficher_)

> _**NB :** Pour que ce soit plus simple à tester, je vous conseille de remettre la page `VideoList` comme page par défaut dans le `Navigator`._

> _**NB2 :** une fois le `VideoDetail` connecté à l'API, vous pouvez supprimer le fichier `src/data.js` qui n'est plus utile._

## E.2. Redirection VideoForm -> VideoDetail
**Maintenant que le `VideoDetail` est dynamisé, profitons en pour modifier le comportement du `VideoForm`** : une fois l'enregistrement d'une nouvelle vidéo terminé, au lieu de rediriger l'utilisateur vers la page liste, **redirigez le plutôt vers la page détail** de la vidéo qu'il vient d'enregistrer !

> _**Indice :** inspectez bien le corps de la réponse à votre requête POST...)_

## E.3. API likes/dislikes
_**Connectons maintenant les boutons like/dislike de la page `VideoDetail` à l'API.**_

1. **Dans la page `VideoDetail`, faites en sorte que :**
	- le clic sur le bouton **"like"** lance un **POST vers http://localhost:8080/api/videos/:id/likes**
	- et que le click sur le bouton **"dislike"** lance un **POST http://localhost:8080/api/videos/:id/dislikes**

		(_où **`:id`** est l'id de la vidéo actuellement affichée dans `VideoDetail`_)
3. **Une fois le POST terminé, mettez à jour le nombre de likes affichés dans la page** (_à partir des données en bdd, quelques fois qu'un autre utilisateur aurait lui aussi entre temps cliqué sur les boutons_ 😉 ).

## Étape suivante <!-- omit in toc -->
Si vous avez terminé cette partie et qu'il vous reste du temps et du courage, je vous invite à passer à la partie : [F. Pour aller plus loin : les commentaires](F-commentaires.md)