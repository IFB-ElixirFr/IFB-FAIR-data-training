---
title: "Première édition"
description: "Cette édition est la première édition de FAIR data"
numeroEdition : 1

timeStart: "15-03-2021 09:00"
timeEnd: "19-03-2021 12:00"
timezone: "Europe/Paris"

---

## Informations générales de l'édition

Cette édition a la première édition de FAIR data.

### Localisation

Chez nous !

## Les participants

{% include participants.html name='participants_edition1' %}

## Photos de la formation

{% include carousel.html pathFolderImages='assets/edition1/photosGroupe' %}

## Les créations lors de l'édition

{:.styleTitle}
### Module 1 

#### Quelle définition pour les données de la recherche ?

{% assign sequenceURL = site.sequences | where:"numeroModule", "1" | where:"numeroSequence", "2" | where: "numeroEdition", "1" %}

**Quand ?**  [Module 1 - Séquence 2]({{site.baseurl}}{{sequenceURL[0].url}})

**Outils utilisé** : [scrumblr](http://scrumblr.ca/)

{%include warning.html 
text="Ne pas effacer un post qui semble vide, il est simplement en train d’être rédigé
" %}

##### Groupe 1
{% include repoImage.html pathInRepo="assets/edition1/module1/Donnees_recherche_Salle1.jpeg" %}

##### Groupe 2
{% include repoImage.html pathInRepo="assets/edition1/module1/Donnees_recherche_Salle2.png" %}

##### Groupe 3
{% include repoImage.html pathInRepo="assets/edition1/module1/Donnees_recherche_Salle3.png" %}

#### Données réutilisables

**Outils utilisé**  : [Mentimeter](https://www.menti.com/)

{% include repoImage.html pathInRepo="assets/edition1/module1/donnees_reutilisables_edition1.jpeg" %}

#### Réutiliser les données? Où est le problème?

**Outils utilisé** : [scrumblr](http://scrumblr.ca/)

{% include repoImage.html pathInRepo="assets/edition1/module1/cyclevie_edition1.jpeg" %}

{:.styleTitle}
### Module 2

#### Formats des données

**Outils utilisé** : [scrumblr](http://scrumblr.ca/)

{% include repoImage.html pathInRepo="assets/edition1/module2/format.png" %}
