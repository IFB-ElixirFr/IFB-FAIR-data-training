---
layout: session
title: Session 3
header_title: Session 3
header_subTitle: "Les Métadonnées"

time: 3h
numeroSession: 3

formateurs:

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