---
title: Soteria-API
publishDate: 2023-11-06 10:00:00
img: /assets/soteria.jpg
img_alt: Image of the dungeon "Fleche de la Vigie" on Destiny 2
description: |
  Soteria-API is a REST API that allows you to view and manage the equipment of one or more Destiny 2 guardians.
tags:
  - Dev
  - REST API
  - Created with AioHttp/AioBungie
---

## Project presentation

> Welcome to the Soteria program! Your portal to Guardian power and perfection.

Soteria-API is a REST API that allows you to view and manage the equipment of one or more Destiny 2 Guardians by interacting with Bungie's API.

This is a personal project I did to understand how Bungie's API works and interacts.

The aim was to create an API capable of seeing and managing the equipment of one or more guardians while using an authentication token in requests to know which person was making the request.

By passing the right authentication token, one was logged in as a Destiny 2 user and could see the current equipment, as well as details, and also transfer, equip and lock equipment on one or more characters.

What's more, the API uses a caching system to avoid making requests to the Bungie API all the time and display information more quickly.

### What does it do?

The API can :

- View a guard's equipment
- Equip a guard's equipment
- Transfer equipment from one keeper to another
- Transfer a guard's equipment to the safe
- Lock a guard's equipment

### Technologies used

The API has been developed using Python, AioHttp and AioBungie.

[AioHttp](https://docs.aiohttp.org/en/stable/) is a Python library that facilitates the creation of asynchronous web servers and HTTP clients, enabling fast and efficient network operations.

[AioBungie](https://github.com/nxtlo/aiobungie) is a statically typed wrapper for Bungie's REST API written in Python3 and Asyncio.


#### Find out more

You can find more information at the following GitHub repository:
https://github.com/VictorCyprien/soteria-api
