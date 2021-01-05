---
title: "Les bases de Git"
description: "Rappel des bases de Git"

---

![Git logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2000px-Git-logo.svg.png)

## Installation 

La page git ([ici](https://git-scm.com/downloads)) regroupe les différents modes d'installation. Pour Mac OSX et Windows, des utilitaires sont disponibles. Pour linux, si git n'est pas déjà installé, l'installation se fait en ligne de commande. 

## Utiliser git 

Pour **linux** et **Mac OSX**, il suffit d'ouvrir un terminal. Pour vérifier que git est correctement installé, vous pouvez essayer la commande suivante : `git --version`

Sur **Windows**, il suffit d'ouvrir l'application git bash (rechercher Git bash avec cortana). Un bash avec les commandes de base de Linux sont disponibles. 

## Initialiser un projet avec Git

Pour commencer, nous allons créer un dossier et se déplacer dedans 
```
$ mkdir gitFolder
$ cd gitFolder
```

Ensuite, nous allons définir notre identité (à ne faire qu'une seule fois par machine) 
```
$ git config --global user.name "Prénom Nom"
$ git config --global user.email "moi@mail.com"
```

Enfin, nous allons initialiser Git 
```
$ git init
```

## Ajouter un fichier

### Git a-t-il détecté des changements ?
Avant d'ajouter un fichier, nous pouvons demander à git s'il a détecté des changements 
```
$ git status

On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
Il n'y a pas de changements pour le moment.

### Création d'un fichier 

Nous allons créer un fichier test.txt comme exemple. Pour remplir ce fichier, nous utiliserons `nano`.

```
nano test.txt
```

Une fois les modifications apportées, nous pouvons afficher le contenu de test.txt :
```
$ cat test.txt
Mon premier fichier sur Git
```
### Git a-t-il détecté des changements ?

```
$ git status
On branch master

No commits yet

Untracked files:
(use "git add file..." to include in what will be committed)

    test.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Git a cette fois-ci détecté des changements. Il indique que le fichier n'est pas surveillé (untracker files). Nous allons pour cela  utiliser la commande `git add`comme indiqué.

## Créer un snapshot
Les changements que nous venons de réaliser nous conviennent. Nous souhaitons à présent que git réalise une photo du fichier à ce temps t (snapshot). 

``` 
git add test.txt 
```

Nous pouvons voir que le statut a changé :  

```
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached file..." to unstage)

        new file:   test.txt
```

## Enregistrer le snapshot 

Nous allons maintenant enregistrer ce snapshot et lui ajouter une légende :   
```
$ git commit -m "My first commit"
[master (root-commit) b4a7d66] My first commit
1 file changed, 1 insertion(+)
create mode 100644 test.txt
```

Encore une fois, le statut a changé : 
```
$ git status
On branch master
nothing to commit, working tree clean
```

## Nouvelles modifications
Nous allons refaire des modifications du fichier test.txt. 

```
$ cat test.txt
Mon premier test sur Git

Modification du texte.
```

Si nous regardons le statut, nous obtenons : 
```
$ git status
On branch master
Changes not staged for commit:
	(use "git add file..." to update what will be committed)
	(use "git checkout -- file..." to discard changes in working directory)

				modified:   test.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
## Quelles sont les différences avec le fichier précédent?

Nous souhaitons à présent savoir s'il existe des différences entre le dernier snapshot et maintenant. 

```diff
$ git diff
The file will have its original line endings in your working directory.
diff --git a/test.txt b/test.txt
index cd1ad34..32a6825 100644
--- a/test.txt
+++ b/test.txt
@@ -1 +1,3 @@
-Mon premier fichier sur Git
+Mon premier test sur Git
+
+Modification du texte.
```
Les ajouts sont en vert avec un + et les suppressions sont en rouge avec un -.

## Un nouveau snapshot 
De nouveau, nous allons réaliser un snapshot et l'enregistrer. 

```
$ git add  test.txt
$ git commit -m "My first commit"
[master (root-commit) b4a7d66] My first commit
1 file changed, 1 insertion(+)
create mode 100644 test.txt

$ git status
On branch master
nothing to commit, working tree clean
```
## Liste des commits
Il peut être intéressant à présent de voir où nous en sommes dans les commits. Il est possible grâce à la commande `git log` d'afficher les commits du plus récent au plus ancien. 
```
$ git log
commit bbea074d0b2f6335f99e2d54c6a7092adb08f337 (HEAD -> master)
Author: thomasdenecker thomas.denecker@gmail.com
Date:   Tue Nov 13 15:15:59 2018 +0100

    My second commit

commit b4a7d66afb8066bced7a0d6113ab26a519b1b6be
Author: thomasdenecker thomas.denecker@gmail.com
Date:   Tue Nov 13 14:49:29 2018 +0100

    My first commit
```

## Les branches
Au cours du développement, nous pouvons avoir besoin de faire des tests sans affecter le code principal. Il est possible grâce à git de faire une "copie" du projet initial (master) dans une branche. Tous les modifications dans la branche n'affecteront pas le code principal. 

Github résume en une figure le flow à suivre lors du développement ([ici](https://guides.github.com/pdfs/githubflow-online.pdf)).

{% include repoImage.html pathInRepo="/assets/img/ressources/git/githubflow.png" %}

Actuellement, nous sommes dans la branche principale (master). L'étoile indique la branche où nous sommes.

```
$ git branch
* master
```
### Création d'une branche
Nous allons créer une nouvelle branche (modifications) : 
```
$ git branch modifications
$ git branch
* master
  modification
```

Ensuite, nous allons nous déplacer dans cette branche : 
```
$ git checkout modification
Switched to branch 'modification'

$ git branch
  master
* modification
```
### Modifications dans la branche
Nous allons à présent modifier le contenu de test.txt.

```
$ cat test.tex
Mon premier test sur Git

Modification du texte.

Modification dans la branche.
```
Nous utilisons ensuite la commande `git diff master` pour détecter les différences avec la branche master.
```diff
$ git diff master
warning: LF will be replaced by CRLF in test.txt.
The file will have its original line endings in your working directory.
diff --git a/test.txt b/test.txt
index 32a6825..ea7aaba 100644
--- a/test.txt
+++ b/test.txt
@@ -1,3 +1,6 @@
 Mon premier test sur Git

 Modification du texte.
+
+Modification dans la branche.
+
```

### Snapshot dans la branche 
Comme dans la branche principale, nous allons ensuite réaliser un snapshot de test.txt.
```
$ git add test.txt
$ git commit -m "Changement dans la branche."
[modification c334c8b] Changement dans la branche
	1 file changed, 3 insertions(+)
```

Si nous reprenons la liste des commits, nous avons bien 3 enregistrements : 
```
$ git log
commit c334c8b34368e9be690b9884d9ba18e8c64407c1 (HEAD -> modification)
Author: thomasdenecker thomas.denecker@gmail.com
Date:   Tue Nov 13 16:01:08 2018 +0100

    Changement dans la branche

commit bbea074d0b2f6335f99e2d54c6a7092adb08f337 (master)
Author: thomasdenecker thomas.denecker@gmail.com
Date:   Tue Nov 13 15:15:59 2018 +0100

    My second commit

commit b4a7d66afb8066bced7a0d6113ab26a519b1b6be
Author: thomasdenecker thomas.denecker@gmail.com
Date:   Tue Nov 13 14:49:29 2018 +0100

    My first commit
```
### Basculer les changements dans la branche master 

Une fois les tests et modifications terminés dans la branche, il est possible de basculer ces changements dans la branche principale (master).

1- Nous revenons dans la branche principale

```
$ git checkout master
Switched to branch 'master'
```

2- Nous réalisons le "merge" des branches 
```
$ git merge modifications
Updating bbea074..c334c8b
Fast-forward
test.txt | 3 +++
1 file changed, 3 insertions(+)
```

3- Nous supprimons la branche modification 
```
$ git branch -d modification
Deleted branch modification (was c334c8b).
```
### Vérification des changements dans la branche 
Nous pouvons commencer par vérifier le statut de la branche.

```
$ git status
On branch master
nothing to commit, working tree clean
```
Enfin, nous pouvons lire le contenu du fichier. Le contenu a bien changé. 
```
$ cat test.txt
Mon premier test sur Git

Modification du texte.

Modification dans la branche.
```
## Distribution du projet 
Le projet est actuellement sur notre dépôt local et uniquement sur notre dépôt local. L'étape suivante consiste à mettre le projet sur un espace partagé : un dépôt distant. Le prochain chapitre portera sur Github, le dépôt distant le plus utilisé actuellement. 

## Ressources 

De nombreuses ressources sont disponibles en ligne. En voici une liste non exhaustive : 
- La git cheat sheet de Github : [le pdf](https://github.com/thomasdenecker/Au_coin_d_un_clavier/blob/master/docs/assets/pdf/git-cheat-sheet-education.pdf)
- Le site de Pierre Poulain : [ici](http://cupnet.net/git-github/)