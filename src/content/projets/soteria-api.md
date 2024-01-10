---
title: Soteria-API
publishDate: 2023-11-06 10:00:00
img: /assets/soteria.jpg
img_alt: Image du donjon "Fléche de la Vigie" sur Destiny 2
description: |
  Soteria-API est une API REST qui permet de voir et gérer l'équipement d'un ou plusieurs gardiens de Destiny 2
tags:
  - Dev
  - API REST
  - Crée avec AioHttp/AioBungie
---

## Présentation du projet

> Bienvenue dans le programme Soteria ! Votre portail vers la puissance et la perfection des Gardiens.

Soteria-API est une API REST qui permet de voir et gérer l'équipement d'un ou plusieurs gardiens de Destiny 2 en interagissant avec l'API de Bungie.

Il s'agit d'un projet personnel que j'ai réalisé pour comprendre le fonctionnement et l'interaction de l'API de Bungie.

Le but était de créer une API capable de voir et gérer l'équipement d'un ou plusieurs gardiens tout en utilisant un jeton d'authentification dans les requêtes pour savoir quelle personne faisait la requête.

En passant le bon jeton d'authentification, on était connecté en tant qu'utilisateur de Destiny 2 et on pouvait voir l'équipement actuel, ainsi que les détails et aussi on pouvait transférer, équiper et verrouiller un équipement sur un ou plusieurs personnages.

De plus, l'API utilise un système de cache pour éviter de faire tout le temps des requêtes vers l'API Bungie et afficher les informations plus rapidement

### Quelle est son rôle ?

L'API est capable de :

- Voir l'équipement d'un gardien
- Equiper l'équipement d'un gardien
- Transférer l'équipement d'un gardien à un autre
- Transférer l'équipement d'un gardien au coffre
- Verrouiller l'équipement d'un gardien

### Technologies utilisés

L'API a été développé avec Python, AioHttp et AioBungie.

[AioHttp](https://docs.aiohttp.org/en/stable/) est une bibliothèque Python qui facilite la création de serveurs web et de clients HTTP asynchrones, permettant des opérations réseau efficaces et rapides.

[AioBungie](https://github.com/nxtlo/aiobungie) est un wrapper statiquement typé pour l'API REST de Bungie écrit en Python3 et Asyncio.


#### En savoir plus

Vous trouverez plus d'informations au dépôt GitHub suivant :
https://github.com/VictorCyprien/soteria-api
