---
layout: session
title: Session 1
header_title: Session 1
header_subTitle: Les données de la Recherche et leur centralité dans le processus de recherche
numeroSession : 1

timeStart: "13-01-2021 09:00"
timeEnd: "13-01-2021 12:00"
timezone: "Europe/Paris"

formateurs:
    - fredericdeLamotte
    - pauletteLieby

objectifs:
    - Objectif 1
    - Objectif 2
    - Objectif 3
  
questions:
    - Quelle définition pour les données de la recherche ? 
    - Quelles seraient les conditions pour que les données soient (ré)utilisables ?

messages:
    - Message 1
    - Message 2
    - Message 3

homework:
    - Créer un compte sur DMP OPIDoR
    - Créer et ouvrir un Plan de Gestion des Données basé sur le modèle choisi (mode entraînement)
    - Inviter les formateurs comme collaborateurs
---


{% assign listeCours = site.cours | where:"numeroSession", page.numeroSession | sort:"numeroCours" %}

{% for item in listeCours  %}
{% assign content = item.content %}

{:.h1Sep}
# {{item.title}}

{{ content }}

{% endfor %}
