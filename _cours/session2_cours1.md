---
title: "How FAIR are your data?"
numeroCours: 1
numeroSession: 2

temps: 40 minutes

formateurs : 
 - fredericdeLamotte
 - julienSeiler
---

**Orateurs** : 
{% for formateur in page.formateurs %}{% for i in site.formateurs %}{% if i.shortName == formateur %}[{{ i.firstName }} {{ i.lastName }}]({{site.baseurl}}/{{ i.url }}) ; {% endif %}{% endfor %}{% endfor %}

**Durée** : {{ page.temps }}

**Source** : Le cours proposé ci-dessous est extrait du document : `How FAIR are your data?` checklist, CC-BY by Sarah Jones & Marjan Grootveld, EUDAT (lien ci-dessous). L'image a été créée par [SangyaPundir](https://commons.wikimedia.org/wiki/File:FAIR_data_principles.jpg).

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.1065991.svg)](https://doi.org/10.5281/zenodo.1065991)

![FAIR](https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/FAIR_data_principles.jpg/800px-FAIR_data_principles.jpg)

### Findable

It should be possible for others to discover your data. Rich metadata should be available online in a
searchable resource, and the data should be assigned a persistent identifier.

- A persistent identifier is assigned to your data
- There are rich metadata, describing your data
- The metadata are online in a searchable resource e.g. a catalogue or data repository
- The metadata record specifies the persistent identifier

### Accessible

It should be possible for humans and machines to gain access to your data, under specific conditions
or restrictions where appropriate. FAIR does not mean that data need to be open! There should be
metadata, even if the data aren’t accessible.

- Following the persistent ID will take you to the data or associated metadata
- The protocol by which data can be retrieved follows recognised standards e.g. http
- The access procedure includes authentication and authorisation steps, if necessary
- Metadata are accessible, wherever possible, even if the data aren’t

### Interoperable

Data and metadata should conform to recognised formats and standards to allow them to be
combined and exchanged.

- Data is provided in commonly understood and preferably open formats
- The metadata provided follows relevant standards
- Controlled vocabularies, keywords, thesauri or ontologies are used where possible
- Qualified references and links are provided to other related data

### Reusable

Lots of documentation is needed to support data interpretation and reuse. The data should conform
to community norms and be clearly licensed so others know what kinds of reuse are permitted.

- The data are accurate and well described with many relevant attributes
- The data have a clear and accessible data usage license
- It is clear how, why and by whom the data have been created and processed
- The data and metadata meet relevant domain standards
