---
title: "Crash test"
description: "Cette édition a pour objectif de tester le contenu pédagogique sur un public ciblé"
numeroEdition : 1

timeStart: "13-01-2021 09:00"
timeEnd: "21-01-2021 12:00"
timezone: "Europe/Paris"

---

## Informations générales de l'édition

Cette édition a pour objectif de tester le contenu pédagogique sur un public ciblé.

### Localisation

Chez nous !

## Les participants

{% include participants.html name='participants_edition1' %}

## Photos de la formation

{% include carousel.html pathFolderImages='assets/edition1/photosGroupe' %}

## Les créations lors de l'édition

### Quelle définition pour les données de la recherche ?

{% assign sequenceURL = site.sequences | where:"numeroModule", "1" | where:"numeroSequence", "2"  %}

**Quand ?**  [Module 1 - Séquence 2]({{site.baseurl}}{{sequenceURL[0].url}})

**Outils utilisé** : [scrumblr](http://scrumblr.ca/)

{%include warning.html 
text="Ne pas effacer un post qui semble vide, il est simplement en train d’être rédigé
" %}

#### Groupe 1

{% include repoImage.html pathInRepo="assets/edition1/module1/def_data_grp1.PNG" %}

<i class="fas fa-comments"></i>
**Proposition** : "*Numérisation d’un signal issu d’observation avec métadonnées associées incluant les transformations méthodologiques*"

#### Groupe 2

{% include repoImage.html pathInRepo="assets/edition1/module1/def_data_grp2.png" %}

<i class="fas fa-comments"></i>
**Proposition** : "*Définition OCDE, avec les technologies actuelles, génération massive de données qui va au delà de ce qui est strictement nécessaire pour les résultats de la recherche. Donc : ‘réparer’ la crise de repro. Exemple : données perdues, non utilisés*"

#### Groupe 3

{% include repoImage.html pathInRepo="assets/edition1/module1/def_data_grp3.png" %}

<i class="fas fa-comments"></i>
**Proposition** : "*On est partis sur différents axes, d’un côté les types de données (audio, video, qualitatif, quantitatif,...), origine de la donnée, est-ce que les outils sont considérées comme des données de la recherche. Lien entre donnée/interprétation/connaissance. FAIR*"

### Réutiliser les données? Où est le problème?

{% include youtube.html idYoutube="66oNv_DJuPc"%}

<i class="fas fa-comments"></i>
**Retours sur la vidéo**

- Points positifs
  - Les données ont été retrouvées et il y avait une copie et la clé USB était possible à lire, il y avait quelques premières métadonnées
- Points négatifs
    - Données non sécurisées ;
    - Pas de metadonnées ;
    - Format propriétaire du logiciel ;
    - Pas d’anticipation.

### Quelles conditions pour que les données soient réutilisables ?

{% assign sequenceURL = site.sequences | where:"numeroModule", "1" | where:"numeroSequence", "3"  %}

**Quand ?**  [Module 1 - Séquence 3]({{site.baseurl}}{{sequenceURL[0].url}})

**Outils utilisé**  : [Mentimeter](https://www.menti.com/)

{% include repoImage.html pathInRepo="assets/edition1/module1/1-definition-donnees-recheche.2400x2400.jpeg" %}

### Les points d’attention à avoir le long d’un projet, de sa conception jusqu’à sa valorisation

{% assign sequenceURL = site.sequences | where:"numeroModule", "1" | where:"numeroSequence", "4"  %}

**Quand ?** [Module 1 - Séquence 4]({{site.baseurl}}{{sequenceURL[0].url}})

**Outils utilisé** : [scrumblr](http://scrumblr.ca/)

{% include repoImage.html pathInRepo="assets/edition1/module1/pointAttentionVieDonnees.png" %}


