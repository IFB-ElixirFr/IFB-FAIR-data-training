---
layout: session
title: Session 4
header_title: Session 4
header_subTitle: "Partager et diffuser les données. Le cadre juridique, les entrepôts et les licences sur les données"
numeroSession : 4

timeStart: "20-01-2021 09:00"
timeEnd: "20-01-2021 12:00"
timezone: "Europe/Paris"

formateurs:
    - fredericdeLamotte
    - lionelMaurel

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