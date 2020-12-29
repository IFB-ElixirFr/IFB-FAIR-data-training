---
layout: session
title: Session 1
header_title: Session 2
header_subTitle: "Bonnes pratiques de gestion des données"

time: 3h
numeroSession: 2

formateurs:
 - Frédéric de Lamotte
 - Paulette Lieby

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