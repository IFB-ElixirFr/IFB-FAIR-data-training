---
layout: session
title: Session 5
header_title: Session 5
header_subTitle: "Le PGD : suite et fin."

time: 3h
numeroSession: 5

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