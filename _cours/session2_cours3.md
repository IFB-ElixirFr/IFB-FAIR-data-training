---
title: "Format de fichier"
numeroCours: 3
numeroSession: 2
description: "L'objectif de ce cours de mieux comprendre les formats de fichier."
temps: 40 minutes

formateurs : 
 - fredericdeLamotte
 - julienSeiler
---

**/!\ Cours en construction**

Il existe deux grandes catégories de formats : textuels et binaires. Distinguer les deux est un jeu pour la préservation et l’exploitation des données.

## Formats « textuels »

Le format textuel :

- Est un suite d’octets représentant des caractères imprimables et affichables à l’écran ;
- Peut entre lus dans un éditeur de texte ;
- Mais souvent besoin d’un logiciel spécifique pour interpréter la structure interne, matérialisée par certains caractères, et en donner une représentation informatique exploitable. 

{% include exemple.html 
text = "
Le format HTML est un format textuel. Son contenu est lisible dans un éditeur texte : 

``` html
<html>
<head><head>
<body>
<p>Bonjour <span style='color:red'>tout le monde</span></p> </body> 
</html> 
```

Mais « interprétable » par un logiciel dédié comme un navigateur web. Le code ci-dessus donne le résultat suivant : 

<p>Bonjour <span style='color:red'>tout le monde</span></p> 

Il s'agit d'un mélange de caractères ordinaires et de caractères ayant une valeur spéciales : `<`, `>`,  `/`, etc.
Les mots ont des valeurs spéciales en HTML (« balises ») s'ils sont encadrés par `< >` ou `</>`: `<body>`, `</body>`, etc...
" %}

## Formats « binaires »

Le format binaires :

- Est une suite d’octets non interprétables comme des caractères imprimables ou affichables ;
- A une structure interne opaque ;
- A besoin de logiciel spécifique pour les lire et les interpréter.


## Textuel ou binaire ?

{% include qcu.html qcuNumber="1" 
question = "Les fichiers PNG sont des fichiers au format : "
choices="textuel|binaire"
reponse="binaire"
%}

{% include qcu.html qcuNumber="2" 
question = "Les fichiers RTF sont des fichiers au format : "
choices="textuel|binaire"
reponse="textuel"
%}

## Formats d’archives

Une archive est un ensemble de fichiers (binaires ou textuels) regroupés dans un fichier unique, compressé (ZIP, 7Z, RAR, TAR.GZ...) ou non (TAR).

{% include exemple.html 
text = "
Le format DOCX (Word récent) est en fait une archive contenant plusieurs fichiers textuels (XML). Il faut changer l’extension en .ZIP pour lister le contenu.

``` bash
.
├── [Content_Types].xml
├── _rels
├── docProps
│   ├── app.xml
│   └── core.xml
└── word
    ├── _rels
    │   └── document.xml.rels
    ├── document.xml
    ├── fontTable.xml
    ├── media
    │   ├── image1.png
    │   └── image2.png
    ├── numbering.xml
    ├── settings.xml
    ├── styles.xml
    ├── theme
    │   └── theme1.xml
    └── webSettings.xml
```
" %}