---
layout: session
title: Session 2
header_title: Session 2
header_subTitle: "La vie des données pendant le projet : Principe et outils pour organiser, nommer, versionner, stocker, archiver, mes données"
numeroSession : 2

timeStart: "14-01-2021 09:00"
timeEnd: "14-01-2021 12:00"
timezone: "Europe/Paris"

formateurs:
    - fredericdeLamotte
    - julienSeiler

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

## {{item.title}}

{{ content }}

{% endfor %}