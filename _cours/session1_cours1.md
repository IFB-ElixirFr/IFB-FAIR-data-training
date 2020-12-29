---
title: "Activité Brise Glace"
cours: 1
numeroSession: 1
temps: 40 minutes

formateurs : 
 - fredericdeLamotte
 - gauthierSarah
 - heleneChiapello
 - jeanfrancoisDufayard
 - julienSeiler
 - lionelMaurel
 - pauletteLieby
 - thomasdenecker
---

**Orateurs** : 
{% for formateur in page.formateurs %}{% for i in site.formateurs %}{% if i.shortName == formateur %}[{{ i.firstName }} {{ i.lastName }}]({{site.baseurl}}/{{ i.url }}) ; {% endif %}{% endfor %}{% endfor %}

**Durée** : {{ page.temps }}

{% capture urlPdf %} {{site.baseurl}}/assets/PDFs/slide_test.pdf {% endcapture %}
{% include pdf.html adresse=urlPdf %}
