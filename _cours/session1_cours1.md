---
title: "Activité Brise Glace"
numeroCours: 1
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

<!-- Ne pas modifier -->

**Orateurs** : 
{% for formateur in page.formateurs %}{% assign find = "false" %}{% for i in site.formateurs %}{% if i.shortName == formateur %}[{{ i.firstName }} {{ i.lastName }}]({{site.baseurl}}/{{ i.url }}) ; {% assign find = "true" %} {% break %}{% endif %}{% endfor %} {% if find == "false" %}{{ formateur }} ; {% endif %}{% endfor %}

**Durée** : {{ page.temps }}
<!-- Fin Ne pas modifier -->

<!-- Le cours -->

{% capture urlPdf %} {{site.baseurl}}/assets/PDFs/slide_test.pdf {% endcapture %}
{% include pdf.html adresse=urlPdf %}
