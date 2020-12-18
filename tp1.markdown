---
layout: tp
title: TP Session 3
header_title: Travaux Pratiques
header_subTitle: Session 3 - Metadonnées
---
# Choix des métadonnées et soumission à l'EBI

Nous vous proposons trois jeux de données pour ce TP
- Dataset 1 : un génome bactérien de la bactérie *S. Salivarius*
- Dataset 2 : Un transcriptome de plante 
- Dataset 3 : Un génome du virus SARS-Cov2

## Partie 1 : Exploration de l'European National Archive (ENA)

### Connection à l'ENA

![Figure 1](https://www.ebi.ac.uk/ena/browser/assets/ENA-logo.png)

Utiliser votre compte webin personnel pour vous connecter à l'instance de développement de l'ENA :

[Se connecter à l'instance de test de l'ENA](https://wwwdev.ebi.ac.uk/ena/submit/webin/)

## Comment sont gérées les métadonnées sur l'ENA ? 

Le modèle d'organisation des données et métadonnées de l'ENA est décrit sur la figure suivante.
![Figure modele ENA](https://ena-docs.readthedocs.io/en/latest/_images/metadata_model_whole.png)

Extrait de la documentation de l'ENA (disponible [ici](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html))

- **Study**: A study (project) groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA. Note that all associated data and other objects are made public when the study is released.
- **Sample**: A sample contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- **Experiment**: An experiment contains information about a sequencing experiment including library and instrument details.
- **Run**: A run is part of an experiment and refers to data files containing sequence reads.
- **Analysis**: An analysis contains secondary analysis results derived from sequence reads (e.g. a genome assembly),
- **Submission**: A submission contains submission actions to be performed by the archive. A submission can add more objects to the archive, update already submitted objects or make objects publicly available.

> Question 1 :  Quels sont le ou les objets de l'ENA qui sont associés à un vocabulaire contrôlé domaine dépendant appelé *Checklist* par l'ENA ?
> Réponse : l'objet "Sample"

## Choisir une checklist correpondant au jeu de données choisi

Une quantité minimale d'informations est requise lors de l'enregistrement des échantillons sur l'ENA et tous les échantillons doivent être conformes à une liste de contrôle (checklist) définissant des valeurs de métadonnées attendues. La liste de contrôle la plus appropriée pour l'enregistrement des échantillons dépend du type de l'échantillon. L'ensemble des checklists de l'ENA sont disponible [ici](https://www.ebi.ac.uk/ena/browser/checklists). 

- Pour le Dataset 1 de la bactérie *S. salivarius* utiliser le mot-clé *pathogen*
- Pour le Dataset 2 du transcriptome de plante utiliser le mot-clé *plant*
- Pour le Dataset 3 du virus SARS-Cov2 utiliser le mot-clé *virus*


> Question 2 : Quel est le numéro d'accession de la checklist à utiliser pour le jeu de données choisi ?
> Pour le Dataset 1 (le génome bactérien de *S. salivarius*) : 

https://www.ebi.ac.uk/ena/browser/view/ERC000028
> Pour le Dataset 2 (transcriptome de plante) 


https://www.ebi.ac.uk/ena/browser/view/ERC000037

> Pour le Dataset 3 (génome du virus SARS-Cov2) : 


https://www.ebi.ac.uk/ena/browser/view/ERC000033


``` xml
<?xml version="1.0" encoding="UTF-8"?>
<CHECKLIST_SET>
<CHECKLIST accession="ERC000028" checklistType="Sample">
          <IDENTIFIERS>
               <PRIMARY_ID>ERC000028</PRIMARY_ID>
          </IDENTIFIERS>
          <DESCRIPTOR>
               <LABEL>ENA prokaryotic pathogen minimal sample checklist</LABEL>
               <NAME>ENA prokaryotic pathogen minimal sample checklist</NAME>
               <DESCRIPTION>Minimum information required for a prokaryotic pathogen sample</DESCRIPTION>
               <AUTHORITY>ENA</AUTHORITY>
               <FIELD_GROUP restrictionType="Any number or none of the fields">
                    <NAME>Collection event information</NAME>
                    <FIELD>
                         <LABEL>isolation_source</LABEL>
                         <NAME>isolation_source</NAME>
                         <DESCRIPTION>describes the physical, environmental and/or local geographical source of the biological sample from which the sample was derived</DESCRIPTION>
                         <FIELD_TYPE>
                              <TEXT_FIELD/>
                         </FIELD_TYPE>
                         <MANDATORY>mandatory</MANDATORY>
                         <MULTIPLICITY>multiple</MULTIPLICITY>
                    </FIELD>
                    <FIELD>
                         <LABEL>lat_lon</LABEL>
                         <NAME>lat_lon</NAME>
                         <DESCRIPTION>geographical coordinates of the location where the specimen was collected</DESCRIPTION>
                         <FIELD_TYPE>
                              <TEXT_FIELD/>
                         </FIELD_TYPE>
                         <MANDATORY>recommended</MANDATORY>
                         <MULTIPLICITY>multiple</MULTIPLICITY>
                    </FIELD>
                    [...]
                </FIELD_GROUP>
          </DESCRIPTOR>
     </CHECKLIST>
</CHECKLIST_SET>
```

## Partie 2 - Utilisation de l'outil **omicsBroker**

Pour ce TP, nous allons utiliser omicsBroker, un outil de *brokering* développé par l'IFB. Pour se connecter, cliquer sur le lien suivant : [ici](#).

- **Attention 1** : omicsBroker est un un prototype a ne pas utiliser avec des vraies données pour une vraie soumission !
- **Attention 2** : Avez vous bien lu le attention 1 ? 

### Section *Annotation* du menu lattéral gauche
Cette section vous permet de créer un projet, de choisir une Checklist et remplir les métadonnées décrivant vos échantillons.

#### Cliquer sur le lien *Project*. 

Crére un projet en renseignant uniquement les champs **obligatoires** : 'Title', 'Alias' et 'Description

#### Cliquer sur le lien *Samples*

Sélectionner la  checklist identifiée à la question précédente 

**SCREENSHOT** 

Le tableau dans la partie inférieure de la page 'Metadata table' s'est mis à jour avec les champs correspondant à la Checklist sélectionnée.

Renseigner les champs **obligatoires** demandés en utilisant le contenu du DMP  Opidor du Dataset que vous avez choisi :

[lien DMP Dataset 1](#)  
[lien DMP Dataset 2](#)  
[lien DMP Dataset 3](#)

#### Cliquer sur le lien *Files*

Uploader les fichiers de données de vos lectures (Fichiers fastq.gz)

### Section *Publish* du menu lattéral gauche

Cette section permet de soumettre les fichiers de données et de métadonnées à l'instance de test de l'ENA
Cliquer sur le lien *ENA* et connectez-vous avec compte personnel Webin


#### Envoyer les fichiers de données brutes sur l'instance de test de l'ENA

Cliquer sur "Upload data" (Step 3)

#### Envoyer les métadonnées sur l'instance de test de l'ENA 

Cliquer sur "Upload metadata" (Step 4)

#### Décrire les fichiers XML de métadonnées générés 

Cliquer sur les différents fichiers XML générés par la soumission et commenter.

#### Vérifier que la soumission test s'est bien passée

Pour cela, se connecter sur l'instance de test de l'ENA [ici](https://wwwdev.ebi.ac.uk/ena/submit/webin/).

> Question 3 : Quel est le numéro d'accession attribué à votre projet par l'ENA ?

### Question Bonus : importation de métadonnées depuis le PGD

Exporter votre PGD au format HTML depuis Opidor.  
Importer le fichier HTML dans omicsBroker.  
Commenter les champs importés.