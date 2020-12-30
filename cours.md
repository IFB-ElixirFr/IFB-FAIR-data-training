---
layout: default
title: Cours
header_title: Listes des cours
---

{% assign listeDesCours = site.cours | sort:"numeroSession" | sort:"numeroCours" %}
{% for cours in listeDesCours %}
{% include coursCard.html itemCours=cours %}
{% endfor %}
