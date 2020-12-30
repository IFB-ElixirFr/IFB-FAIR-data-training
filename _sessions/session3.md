---
layout: session
title: Session 3
header_title: Session 3
header_subTitle: "Les Métadonnées : les standards du domaine des données omiques en biologie et séances pratiques d’annotations de jeux de données"
numeroSession : 3

timeStart: "15-01-2021 09:00"
timeEnd: "15-01-2021 12:00"
timezone: "Europe/Paris"

formateurs:
    - heleneChiapello
    - thomasdenecker
    - jeanfrancoisDufayard
    - gauthierSarah
    - pauletteLieby
    - fredericdeLamotte

objectifs:
    - Objectif 1
    - Objectif 2
    - Objectif 3
  
questions:
    - Question 1 
    - Question 2

messages:
    - Message 1
    - Message 2
    - Message 3

homework:
    - Consigne 1
    - Consigne 2
    - Consigne 3
---


{% assign listeCours = site.cours | where:"numeroSession", page.numeroSession | sort:"numeroCours" %}

{% for item in listeCours  %}
{% assign content = item.content %}

{:.h1Sep}
# {{item.title}}

{{ content }}

{% endfor %}