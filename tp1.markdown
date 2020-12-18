---
layout: tp
title: TP
header_title: Travaux Pratiques
header_subTitle: Session 3 - Metadonnées
---

# Choix des métadonnées et soumission d'un génome de la bactérie *S. salivarius* à l'EBI

## Partie 1 : Exploration de l'European National Archive (ENA)

### Connection à l'ENA

![Figure 1](https://www.ebi.ac.uk/ena/browser/assets/ENA-logo.png)

Utiliser votre compte webin personnel pour vous connecter à l'instance de développement de l'ENA

[instance dev ENA](https://wwwdev.ebi.ac.uk/ena/submit/webin/)

## Comment sont gérées les métadonnées sur l'ENA ? 

Le modèle d'organisation des données et métadonnées de l'ENA est décrit sur la figure suivante.
![Figure modele ENA](https://ena-docs.readthedocs.io/en/latest/_images/metadata_model_whole.png)

Extrait de la documentation de l'ENA (disponible [ici](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html))

<div class="card">
            <div class="card-header text-white bg-info">
                <h2 style="all:unset; font-size: 1.15rem; font-weight: bold;"><i class="fas fa-pen"></i> ENA Documentation</h2>
            </div>
            <div class="card-body">
                - **Study**: A study (project) groups together data submitted to the archive and controls its release date. A study accession is typically used when citing data submitted to ENA. Note that all associated data and other objects are made public when the study is released.
- **Sample**: A sample contains information about the sequenced source material. Samples are associated with checklists, which define the fields used to annotate the samples. Samples are always associated with a taxon.
- **Experiment**: An experiment contains information about a sequencing experiment including library and instrument details.
- **Run**: A run is part of an experiment and refers to data files containing sequence reads.
- **Analysis**: An analysis contains secondary analysis results derived from sequence reads (e.g. a genome assembly),
- **Submission**: A submission contains submission actions to be performed by the archive. A submission can add more objects to the archive, update already submitted objects or make objects publicly available.
          </div>
          <div class="card-footer">
               Extrait de la documentation de l'ENA (disponible [ici](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html))
          </div>
</div>



> Quels sont le ou les objets de l'ENA qui sont associés à un vocabulaire contrôlé domaine dépendant appelé *Checklist* par l'ENA ?
> Réponse : l'objet "Sample"

## Choisir une checklist correpondant à la bactérie *S. salivarius* en utilisant le mot-clé *prokaryote* ou *pathogen*

Une quantité minimale d'informations est requise lors de l'enregistrement des échantillons sur l'ENA et tous les échantillons doivent être conformes à une liste de contrôle (checklist) définissant des valeurs de métadonnées attendues. La liste de contrôle la plus appropriée pour l'enregistrement des échantillons dépend du type de l'échantillon. L'ensemble des checklists de l'ENA sont disponible [ici](https://www.ebi.ac.uk/ena/browser/checklists). 

> Quelle est le numéro d'accesion de la checklist à utiliser pour le génome bactérien de *S. salivarius* ? 

https://www.ebi.ac.uk/ena/browser/view/ERC000028

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

**Attention 1** : omicsBroker est un un prototype a ne pas utiliser avec des vraies données pour une vraie soumission !
**Attention 2** : Avez vous bien lu le attention 1 ? 

### Créer un projet/Study

**SCREENSHOT** 

Créer et renseigner les champs demandés en utilsant le DMP xxx depuis Opidor [lien](#)

### Renseigner les métadonnées associées aux expériences et aux échantillons

#### Sélectionner la  checklist identifiée à la question précédente

#### Remplir les différents champs

### Uploader les fichiers de données

### Soumettre à l'instance de test de l'EBI

#### Vérifier les fichiers XML générés par la soumission

#### Envoyer les fichiers de données sur l'instance de test

#### Envoyer les métadonnées sur l'instance de test 

#### Vérifier que la soumission des données s'est bien déroulée

**Rappel** : vous pouvez vous connecter sur cette instance de test [ici](https://wwwdev.ebi.ac.uk/ena/submit/webin/).

#### Bonus : importation de métadonnées depuis le PGD

##### Exporter cotre PGD au format HTM depuis Opidor

#### Importer le fichier HTML dans omicsBroker.

Commenter les champs importés