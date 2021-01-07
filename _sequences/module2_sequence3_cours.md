---
title: "Format de fichier"
numeroSequence: 3
numeroModule: 2
numeroEdition:
    - 1
type: "cours"
description: "L'objectif de ce cours de mieux comprendre les formats de fichier."
temps: 40 minutes

formateurs : 
 - fredericdeLamotte
 - julienSeiler

---

Il existe deux grandes catégories de formats : textuels et binaires. Distinguer les deux est un jeu pour la préservation et l’exploitation des données.

## Formats « textuels »

Le format textuel :

- Est un suite d’octets représentant des caractères imprimables et affichables à l’écran ;
- Peut entre lus dans un éditeur de texte ;
- Mais souvent besoin d’un logiciel spécifique pour interpréter la structure interne, matérialisée par certains caractères, et en donner une représentation informatique exploitable. 

### Exemple du format HTML 

Le format HTML est un format textuel. Son contenu est lisible dans un éditeur texte : 

``` html
<html>
<head><head>
<body>
<p>Bonjour <span style='color:red'>tout le monde</span></p> </body> 
</html> 
```

Mais « interprétable » par un logiciel dédié comme un navigateur web. 

Le code ci-dessus donne le résultat suivant : 

<p>Bonjour <span style='color:red'>tout le monde</span></p> 

Il s'agit d'un mélange de caractères ordinaires et de caractères ayant une valeur spéciales : `<`, `>`,  `/`, etc.
Les mots ont des valeurs spéciales en HTML (« balises ») s'ils sont encadrés par `< >` ou `</>`: `<body>`, `</body>`, etc...

### Exemple du format RTF

Le format RTF (texte structuré) a un contenu lisible dans un éditeur texte ... 

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/rtf.png" %}

... Mais uniquement interprétable avec Word, Libre office ou autre traitement de texte. 

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/word.png" %}

## Formats « binaires »

Le format binaires :

- Est une suite d’octets non interprétables comme des caractères imprimables ou affichables ;
- A une structure interne opaque ;
- A besoin de logiciel spécifique pour les lire et les interpréter.

### Exemple du format PNG

Le contenu illisible dans un éditeur texte (à part «?PNG » au début) :

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/png_text.png" %}

Il est uniquement lisible et interprétable avec une visionneuse d’images : 

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/png_visu.png" %}

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

{% include card.html 
color="darkseagreen"
header="Questionnement"
text="
- Quelles conséquences pour vous ?
- Et pour ceux qui arriveront plus tard ?
"
%}

## Quels logiciels utilisez-vous pour analyser ces fichiers ?

Pour produire, collecter ou analyser vos données, vous utilisez : 

- Traitement de texte (Ex: Word)
- Editeur de texte brut (Ex : Notepad++)
- Tableur (Ex: Excel)
- Logiciel d’analyse statistique (Ex: SPSS)
- Logiciel d’analyse de données qualitatives (Ex: NVIVO) 
- Code informatique (Ex : R, Python)
- Traitement d’image, de sons, de vidéos
- Cartographie et géomatique
- Autre ?

{% include card.html 
color="darkseagreen"
header="Questionnement"
text="
- Fonctionnent-ils en ligne ou après installation sur un ordinateur ? 
- Fonctionnent-ils avec un système d’exploitation particulier (Windows, Mac, Linux) ?
- Sont-ils lies à un type d’ordinateur ou à un instrument particulier (ex : microscope) ?
- Sont-ils gratuits ou payants ? Qui paye ? 
- S’ils n’existaient plus ou si vous n’y avez plus accès, pourriez-vous continuer à travailler ?
- L’éditeur du logiciel est il en bonne santé ? 
"
%}

{% include question.html question="Que proposez vous pour garantir la pérennité de l’accès à vos données ?" %}

## Recommandations sur le format des fichiers

Privilégiez les formats ouverts afin de faciliter le partage des données

### Format ouver / Format fermé

{:.tableStyle}
| Format ouvert | Format fermé             |
| ------------- | -----------------------: |
| Spécifications publiques et gratuites | Spécifications non publiques |
| Aucune restriction légale pour l’utiliser | Des restrictions légales s’opposent à son utilisation (droit d’auteur, copyright, brevet) |
| Format indépendant du logiciel utilisé qui assure l’interopérabilité des données | Format lisible qu’avec un logiciel particulier |
| Maintenu par une organisation à but non lucratif | Format propriétaire |

### Format conseillé

{:.tableStyle}
| Type          | Format conseillé | Format non conseillé     |
| ------------- | ---------------- | -----------------------: |
| Document texte | PDF, TXT, ODT | MS Word, RTF |
| Feuille de calcul | ODS, CSV | MS Excel, PDF, OOXML |
| Base de données | SQL, SIARD, DB tables (.CSV) | MS Access, dBase (.dbf), HDF5 |
| Données statistiques | SPSS Portable, STATA, XML, CSV, TXT | SAS et R |
| Images | JPEG, TIFF, PNG | DICOM |
| Audio | BWF, MXF, Matroska (.mka), FLAC, OPUS | WAVE, MP3, AAC, AIFF, OGG |
| Video | MXF, MKV | MPEG-4, MPEG-2, AVI, QuickTime (.mov, .qt)|
| Information géographique | GML, MIF/MID | ESRI Shapefiles, MapInfo, KML|
| Images géoréférencées | GeoTIFF (.tif, .tiff) | TIFF World File |
| Raster | ASCII GRID (.asc, .txt) | ESRI GRID |

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/fig1.png" %}

### Définition

{% include card.html 
color="red"
header="Définition légale du format ouvert en France (loi no 2004-575 du 21 juin 2004)"
text="
On entend par standard ouvert tout protocole de communication, d’interconnexion ou d’échange et tout format de données interopérable et dont les spécifications techniques sont publiques et sans restriction d’accès ni de mise en œuvre. 
"
%}

### Format bien documenté et utilisable sans demander d’autorisation

{% include exemple.html text="DOCX, ODT, XLSX, ODS, XML ; DOC et XLS depuis 2006" %}

### Format fermés (ou propriétaires)

Format non ou mal documenté et/ou dont l’utilisation est payante ou soumise (au moins en théorie) à autorisation.

{% include exemple.html text="PSD, JPEG, logiciels SPSS, STATA, SAS, NVIVO, Altas.ti" %}

En pratique, on peut souvent travailler avec un format fermé populaire et le convertir en format ouvert. Mais il faut vérifier si la conversion altère les informations, et prendre des mesures de compensation si nécessaire.

{% include exemple.html text="La conversion XLSX -> CSV perd les mises en forme" %}

## Formats standardisés

La documentation d’un format peut devenir une norme officielle nationale ou internationale ou un standard de facto. 

{% include exemple.html 
text="
- PDF/A1 est une version standardisée (ISO 19005) du format PDF. Les autres versions de PDF ne sont pas standardisées ;
- Les formats Libre office (ODS, ODT...) sont standardisés (ISO/IEC 26300) ;
- Le format XML est standardisé par une « recommandation » du W3C (équivaut à une norme) ;
- Le format CSV est décrit dans la RFC 4180 de l’IETF, mais n’est pas réellement standardisé (la RFC est un document indicatif), plusieurs versions existent ;
- Les formats bureautique Microsoft (XLSX, DOCX...) sont standardisés (ISO/IEC 29500). Mais les logiciels semblent parfois s’écarter du standard.
"
%}

## Quel logiciel pour quel extension ? 

Le site [http://dotwhat.net](http://dotwhat.net) associe pour un grand nombre d'extension le/les logiciel(s) pour les ouvrir. 

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/fig2.png" %}

## Où se trouve mon fichier ? 

{% include repoImage.html pathInRepo="/assets/img/sequences/module2_sequence3/fig3.png" %}