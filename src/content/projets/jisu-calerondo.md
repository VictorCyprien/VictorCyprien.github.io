---
title: Jisu Calenrondo
publishDate: 2023-07-18 00:00:00
img: /assets/neomuna.jpg
img_alt: Image de Neomuna dans Destiny 2
description: |
  Jisu Calenrondo est un bot discord qui informe les utilisateurs d'un serveur discord des dernières vidéos mise en ligne par des youtubeurs
tags:
  - Dev
  - Bot Discord
  - Threading
  - YouTube API
---

## Présentation du projet

> "Ici Jisu Calenrondo, en direct du journal de Néomuna !"

Jisu Calenrondo est un bot discord qui informe les utilisateurs d'un serveur discord des dernières vidéos mise en ligne par des youtubeurs.

Pour le contexte de la création, j'étais dans un clan sur le jeu vidéo Destiny 2 et les membres du serveur discord avaient crées un salon pour notifier les streams et les vidéos de certaines personnes. Le problème venait qu'on avait un choix limité de chaîne YouTube auquel on pouvait recevoir la notification d'une nouvelle vidéo (seulement 3 personnes). J'ai donc eu l'idée de créer un bot qui pouvait notifier la dernière vidéo de plusieurs YouTubeurs mais aussi ajouter, enlever des YouTubeurs et poster les messages sur un salon en particulier à ma guise.

### Quel est son rôle ?

Le rôle de ce bot est de notifier les utilisateurs du serveur Discord des dernières vidéos postés par des YouTubeurs en utilsant les Threads et en communiquant avec l'API de YouTube.

Le bot utilise un fichier json qui stocke l'ID de la chaine YouTube ainsi que plusieurs paramètres :

- Le nom de la chaîne
- L'URL de la dernière vidéo
- L'ID du salon discord à notifier

Il possède aussi 4 commandes d'interactions :

- Ajout de chaine Youtube avec en paramètre l'ID de la chaîne, le nom de la chaîne et l'ID du salon discord à notifier
- Suppression de chaine Youtube avec en paramètre le nom de la chaîne
- Commencer/Stopper les notifications

En démarrant les notifications, cela crée un Thread qui sera executé toute les 10 minutes et va passer sur chaque chaîne YouTube défini dans le json pour faire des requêtes à l'API YouTube et récupérer l'URL de la dernière vidéo.

L'API est limité à 10000 crédits d'utilisations par jour. Pour chaque chaîne, le bot effectue deux requêtes de 1 crédit (soit 2 crédit au total)

Quand l'URL est le même dans le json et dans la requête à l'API, le bot passe à la chaîne suivante et attend 10 secondes pour éviter les notifications intempestifs.

Si l'URL est différente, il enregistre la nouvelle URL dans le json et notifie les membres du salon avec un message.

Puis à la fin, il se met en pause et reprend dans les 10 prochaines minutes.


### Technologies utilisés

J'ai utilsé Python ainsi que la librairie `requests` pour les requêtes à l'API et `asyncio` pour gérer les threads.

L'API était hébergé sur un serveur d'hébergement de bot discord gratuit mais qui a fermé depuis peu.




