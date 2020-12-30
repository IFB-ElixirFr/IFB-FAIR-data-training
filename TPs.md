---
layout: default
title: TPs
header_title: Listes des travaux pratiques
---

{% assign listeDesTPs = site.TPs | sort:"numeroSession" | sort:"numeroTP" %}
{% for tp in listeDesTPs %}
{% include TPsCard.html itemTP=tp %}
{% endfor %}
