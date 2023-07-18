---
title: Barbuc-API
publishDate: 2023-07-18 00:00:00
img: /assets/stock-1.jpg
img_alt: Image d'un barbecue
description: |
  Barbuc-Api est une API REST qui permet de gérer les utilisateurs et les barbecues.
tags:
  - Dev
  - API REST
  - Crée avec Python Flask
---

## Présentation du projet

> Savourez l'été à la perfection avec notre sélection de barbecues pour des moments de grillades mémorables sous le soleil éclatant !

Barbuc-Api est une API REST qui permet de gérer les utilisateurs et les barbecues.

Elle a vue le jour pendant un cours de sécurité en développement durant ma 2eme année de formation en Master Systèmes d'Information.

Le but était de créer une API capable de gérer la réservation de barbecues pour les utilsateurs tout en utilisant un jeton d'authentification avec un système de droits pour les utilisateurs et les actions qui étaient autorisés et interdites.

### Quelle est son rôle ?

L'API est capable de :

- Créer un utilisateur
- Avoir une liste d'utilisateurs
- Mettre à jour un utilisateur
- Supprimer un utilsateur
- De se connecter/déconnecter
- Avoir la liste des barbecues
- Créer un barbecue
- Mettre à jour un barbecue
- Supprimer un barbecue
- Regarder la disponibilté d'un barbecue
- Réserver un barbecue
- Annuler la réservation d'un barbecue
- Lister les réservations des barbecues

### Technologies utilisés

L'API a été développé en Python Flask.

Elle utilise MongoDB pour le stockage des utilisateurs et des barbecues.
Elle utilise aussi Redis pour le stockage des jetons d'authentifications Blacklisté quand un utilisateur se déconnecte.

L'API ainsi que MongoDB et Redis sont déployés sur Docker

#### En savoir plus

Vous trouverez plus d'informations au dépôt GitHub suivant :
https://github.com/VictorCyprien/barbuc-api
