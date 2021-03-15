---
title: "Crise de reproductibilité"
numeroSequence: 2
numeroModule: 1
numeroEdition:
    - 0
type: "cours"
description: "Présentation du contexte actuel de la reproductibilité"
temps: 30 minutes

formateurs : 
 - fredericdeLamotte
 - pauletteLieby

---

## Les slides

{% include pdf.html adresse="assets/PDFs/edition0/Module1/Module1_Sequence2.pdf" local="true" %}

## La disruption numérique : une bascule brutale

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig1.png" %}

## Qui bouscule l’existant

- **Uber** : La première compagnie de taxi n’en possède aucun ;
- **AirBnB** : Le premier fournisseur de logement n’en possède pas ;
- **Skype** : La première compagnie de téléphonie ne possède pas de standard ;
- **Facebook** : Le premier fournisseur d’info ne crée pas de contenu ;
- **Netflix** : Le premier diffuseur de film ne possède pas de salle de cinéma.

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig2.png" %}

## Le déluge de données en Science

Les techniques à haut débit, une révolution qui provoque un déluge de données. Par exemple pour le génome humain :

- en 1990 = 13 ans et 3 Milliards $
- en 2015 = quelques heures et 1000 $

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig3.png" %}

Par conséquent :

- La quantité de données à stocker et analyser explose
- Le rendement d’analyse chute

## Répondre aux questions de Science

### Avant

1. Concevoir l’expérimentation
2. Collecter des résultats
3. Analyser des résultats

### Maintenant

**Un changement de paradigme**

1. Générer massivement des données
2. Organiser (stocker, documenter, annoter)
3. Analyser (extraire de l’information)
4. Diffuser l’information

## Les ravages du temps

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig4.png" %}

## Les défis de la reproductibilité

### En psychologie

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig5.png" %}

### En biologie

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig6.png" %}
{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig7.png" %}

Source : 1,500 scientists lift the lid on reproducibility". Nature. 533: 452–454 - 2016

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig8.png" %}

## Disruption + Big Data + Crise

Le traitement de l’information (scientifique) sera notre Noeud Gordien 

{% include repoImage.html pathInRepo="assets/img/sequences/module1_sequence2/fig9.png" %}


{% include question.html question="Quelle définition pour les données de la recherche ?" 
consigne="
Pour tenter d’aborder cette question, nous allons procéder en 4 étapes :

1. Vous allez prendre un temps de réflexion individuelle de **5 minutes** pour rédiger sur le document partagé une première définition qui vous est personnelle.
2. Pendant les **5 minutes** suivantes, vous discuterez de vos définitions avec trois autres participants et proposerez une définition combinée, en gardant la trace des divergences s’il y a lieu. Donc vous finissez ces 5 minutes avec **1 définition**
3.Votre groupe prendra connaissance de l’ensemble des définitions consolidées proposées puis une discussion portera sur les divergences entre ces définitions (temps prévu **10 minutes**)
4. L’activité se terminera par la présentation des définitions les plus courantes des données de la Recherche
"
%}

![Time](https://media.giphy.com/media/3oz8xKaR836UJOYeOc/giphy.gif)


{% include definition.html 
text="Les données de recherche sont les **preuves** qui sous-tendent la réponse à la question de recherche et peuvent être utilisées pour *valider* les **résultats**, quelle que soit leur forme (i.e. imprimée, numérique ou physique).

Il peut s'agir de **renseignements quantitatifs** ou d'**énoncés qualitatifs** recueillis par les chercheurs dans le cadre de leurs travaux par **expérimentation**, **observation**, **modélisation**, **entrevue** ou autres méthodes, ou de renseignements tirés de preuves existantes.

Les données peuvent être brutes ou primaires (par exemple, directement issues de mesures ou de collectes) ou dérivées de données primaires par analyse ou interprétation (e.g. nettoyées ou extraites d'un ensemble de données plus vaste), ou encore dérivées de sources existantes dont les droits peuvent être détenus par d'autres."
%}
