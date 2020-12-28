---
layout: default
title: Home
header_title: Formation IFB science ouverte & PGD 
header_subTitle: Comment gérer des jeux de données haut-débit en sciences de la vie et de la santé 
---

### Présentation et application des principes FAIR de gestion des données dans un projet bioinformatique.

L’Institut Français de Bioinformatique ([IFB](https://www.france-bioinformatique.fr/)) organise une formation à destination de bioinformaticiens, biologistes et médecins impliqués dans des projets d’analyse bioinformatique de jeux de données omiques et souhaitant mettre en œuvre les principes "FAIR" (Facile à trouver, Accessible, Interopérable, Réutilisable) tout au long du déroulement du projet. La formation abordera les différents points fondamentaux (théoriques, pratiques, juridiques) en lien avec la politique nationale d’ouverture des données de la recherche et présentera sous forme de séances pratiques les ressources nationales accessibles à la communauté scientifique ainsi que les solutions proposées par l’IFB pour gérer les données d’un projet de recherche.

### Objectifs pédagogiques

A la fin de cette formation, les participants connaîtront et pourront mettre en œuvre les principes de la science ouverte pour gérer leurs jeux de données dans un projet :

- Les principes fondamentaux de l’Open Data en biologie et santé, y compris dans ses aspects juridiques ;
- Les bonnes pratiques et outils de gestion des données d’un projet en bioinformatique, en lien avec les ressources de l’infrastructure IFB ;
- Le PGD : séances théoriques et pratiques de construction d’un PGD sur des exemples de jeux de données omiques ;
- Le choix des métadonnées : panorama des ressources existantes pour choisir des métadonnées et mise en pratique pour annoter des jeux de données omiques en vue de la publication des données dans une banque internationale ou un dataverse institutionnel.

### Modalités pratiques

5 séances de 3 heures en distanciel synchrone de 9h00 à 12h00. L'outil utilisé pour cette formation est [Zoom](https://zoom.us/). Il est important de vérifier avant les sessions que :

- Votre micro est fonctionnel ;
- Votre caméra est fonctionnelle ;
- Vous avez repéré l’espace de partage ;
- Vous êtes en mesure de partager votre écran.

Des travaux ponctuels seront à effectuer entre les séances.

### Formateurs

{% assign formateurs = site.formateurs | sort:"lastName" %}

{% for formateur in formateurs %}
    {% capture name %}{{ formateur.firstName }} {{ formateur.lastName }}{% endcapture %}
    {% capture shortName %}{{ formateur.shortName }}{% endcapture %}
    {% if formateur.urlImage %}
        {% capture urlImage %}{{ formateur.urlImage }}{% endcapture %}
        {% include profile.html urlImage=urlImage name=name shortName=shortName %}
    {% else %}
        {% capture GID %}{{ formateur.githubID }}{% endcapture %}
        {% include profileGithub.html githubId=GID name=name shortName=shortName %}
    {% endif %}
{% endfor %}

### Programme de la version de test

{% include sessionTable.html %}  
