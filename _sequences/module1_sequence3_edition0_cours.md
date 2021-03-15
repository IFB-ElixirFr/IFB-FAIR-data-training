---
title: "Vers FAIR"
numeroSequence: 3
numeroModule: 1
numeroEdition:
    - 0
type: "cours"
description: ""
temps: 30 minutes

formateurs : 
 - fredericdeLamotte
 - pauletteLieby

---

## Les slides

{% include pdf.html adresse="assets/PDFs/edition0/Module1/Module1_Sequence3.pdf" local="true" %}


## Réutiliser les données? Où est le problème?

{% include youtube.html idYoutube="66oNv_DJuPc"%}

{% include question.html 
question="Quelles conditions pour que les données soient réutilisables ?"
consigne="
Pour tenter d’aborder cette question, nous allons procéder en deux étapes :
    1-	Réfléchissez à cinq conditions nécessaires et indiquez les dans (Mentimeter : lien dans le chat).
	2-	À partir du nuage de mots créé collectivement quels regroupements pouvons-nous faire ?
"
%}

## Les principes FAIR

![FAIR](https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/FAIR_data_principles.jpg/800px-FAIR_data_principles.jpg)

Les principes FAIR Data sont un ensemble de principes directeurs visant à rendre les données trouvables, accessibles, interopérables et réutilisables.

Ces principes fournissent des orientations pour la gestion des données scientifiques et sont pertinents pour toutes les parties prenantes de l'écosystème numérique actuel.

Ils s'adressent directement aux producteurs et aux éditeurs de données afin de promouvoir une utilisation maximale des données de recherche. 


## Vos données sont elles FAIR ?

FAIR comme 

- **F**indable / Trouvable
- **A**ccessible
- **I**nteroperable
- **R**eusable / Reutilisable

La source des informations ci-dessous : [https://doranum.fr/enjeux-benefices/principes-fair/](https://doranum.fr/enjeux-benefices/principes-fair/)

### Findable -- Faciliter la découverte des données

- Les données ont un **PID** (Persistent IDentifier ou identifiant pérenne en français) ;
- Les données sont décrites par des **métadonnées** ;
- Ces métadonnées spécifient le PID des données ;
- Les données sont déposées dans un **entrepôt de données**.

### Accessible -- Permettre l'accès aux données et leur téléchargement

- Les données sont accessibles à travers un **protocole de communication standard** ;
- Ce protocole est **libre et ouvert** ;
- Ce protocole permet un accès par **authentification** si besoin ;
- Les **métadonnées restent accessibles** même si les données ne le sont pas.


### Interoperable -- Permettre l'exploitation des données quel que soit l'environnement informatique utilisé

- Les données sont **décrites avec un vocabulaire contrôlé** ;
- Le vocabulaire utilisé **respecte les principes FAIR** ;
- Les **métadonnées sont reliées à d'autres données**.

### Reusable -- Permettre la réutilisation des données pour de futures recherches

- Les métadonnées ont une **pluralité d'attributs** ;
- Une licence de réutilisation est attribuée aux données ;
- La description des données indique leur **provenance** ;
- Le partage des données suit les **standards de la communauté scientifique**.

## FAIR self assessment tool

{% include repoImage.html pathInRepo="/assets/img/sequences/module1_sequence3/FAIR_self_assessment_tool.png" %}

Source : [FAIR self assessment tool – ARDC](https://ardc.edu.au/resources/working-with-data/fair-data/fair-self-assessment-tool/)