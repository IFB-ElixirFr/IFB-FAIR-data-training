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

### Prérequis : nous demandons à chaque participant (formateur et apprenant) 

#### 1. De vous créer un compte personnel sur les outils listés dans le tableau ci-dessous pour vous permettre de les utiliser pendant la formation : 

{:.table .table-striped}
| Outil | Fonction | Site | Commentaire |
| ----- | -------- | ---- | ----------- |
| hackmd | Ecriture collaborative de documents en markdown | [https://hackmd.io/](https://hackmd.io/){:target="_blank"} | Il est possible et recommandé d’utiliser son compte github si on en a un |
| Opidor | Rédaction  et partage  de PGD | [https://dmp.opidor.fr](https://dmp.opidor.fr){:target="_blank"} | Il est recommandé de faire cela quelques jours avant le démarrage du cours ; il se peut que la validation du compte ne soit pas immédiate |
| OSF | Création d’un espace partagé pour gérer les documents /fichiers d’un projet | [https://osf.io/](https://osf.io/){:target="_blank"} | Il est recommandé d’utiliser son ORCID si on en a un. Lors du renseignement du profil, bien veiller à choisir le lieu de stockage comme étant Frankfurt / Allemagne |
| ENA | Ressource européenne pour l’archivage des données de séquences  (nous travaillerons sur l’instance de test) | [https://wwwdev.ebi.ac.uk/ena/submit/webin/accountInfo](https://wwwdev.ebi.ac.uk/ena/submit/webin/accountInfo){:target="_blank"} | A la fin de la procédure, vous devez recevoir un nom d’utilisateur du type ‘Webin-xxx’ |

#### 2. D'installer docker

Docker est un outil de gestion de containers (utilisation comme solution de secours pour le TP de la session 3 métadonnées). 

1. Aller sur le site https://docs.docker.com/get-docker/ 
2. A la fin de l’installation, pour vérifier que l’installation est correcte, 
   - Lancer docker (comme indiqué dans la page d'installation) ;
   - Ouvrir un terminal ;
   - Lancer `docker run hello-world`. Si le retour est : `Hello from Docker!` C’est que l’installation est correcte ;
   - Dans ce cas : lancer la commande `docker pull tdenecker/omicsbroker`. Une fois le téléchargement terminé, vous êtes prêt pour le TP.

#### 3. De choisir et déposer sur un espace partagé OSF une photo emblématique d’un lieu de votre choix que vous appréciez particulièrement

1. Nommer ce fichier avec votre nom
2. Déposer le fichier sur le site [https://osf.io/](https://osf.io/){:target="_blank"} : utiliser pour cela le lien confirmant l’ouverture de l’accès au projet et transférer la photo sur Formation IFB science ouverte & PGD 

### Modalités pratiques

5 modules de 3 heures en distanciel synchrone de 9h00 à 12h00. L'outil utilisé pour cette formation est [Zoom](https://zoom.us/). Il est important de vérifier avant les sessions que :

- Votre micro est fonctionnel ;
- Votre caméra est fonctionnelle ;
- Vous avez repéré l’espace de partage ;
- Vous êtes en mesure de partager votre écran.

Des travaux ponctuels seront à effectuer entre les modules.

### Formateurs

{% assign formateurs = site.formateurs | sort:"lastName" %}
{% for formateur in formateurs %}
{% include profile.html formateur=formateur %}
{% endfor %}

### Programme

{% include moduleTable.html %}  

### Les mots clés de la formation

Ce nuage de mots a été construit automatiquement à partir du contenu de toutes les séquences.

{% include cloudWord.html %}