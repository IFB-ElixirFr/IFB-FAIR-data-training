---
layout: session
title: Session 4
header_title: Session 4
header_subTitle: "Partager et diffuser les données : le cadre juridique, les entrepôts et les licences sur les données."

time: 3h
numeroSession: 4

date: Mercredi 20 janvier 2021

formateurs:
 - fredericdeLamotte
 - lionelMaurel

objectifs:
  
questions:

messages:

homework:

---

{% assign listeCours = site.cours | where:"numeroSession", page.numeroSession | sort:"cours" %}

{% for cours in listeCours  %}
## {{cours.title}}
{{cours.content}}
{% endfor %}