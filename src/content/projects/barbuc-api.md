---
title: Barbuc-API
publishDate: 2023-07-18 00:00:00
img: /assets/barbucue.jpg
img_alt: Image of a barbecue
description: |
  Barbuc-Api is a API REST which manage users and barbecues
tags:
  - Dev
  - API REST
  - Built with Python Flask
---
## Project presentation

> Enjoy summer to perfection with our selection of barbecues for memorable grilling moments under the bright sun!

Barbuc-Api is a REST API which manage users and barbecues

It was born during a security development course in my 2nd year of a Master's degree in Information Systems.

The aim was to create an API capable of managing the reservation of barbecues for users while using an authentication token with a system of rights for users and actions that were authorized and prohibited.

### What does it do?

The API is able to :

- Create a user
- Manage a list of users
- Update a user
- Delete a user
- Connect/disconnect
- Have a list of barbecues
- Create a barbecue
- Update a barbecue
- Delete a barbecue
- Check barbecue availability
- Reserve a barbecue
- Cancel a barbecue reservation
- List barbecue reservations

### Technologies used

The API has been developed in Python Flask.

It uses MongoDB to store users and barbecues.
It also uses Redis to store Blacklisted authentication tokens when a user logs out.

The API, MongoDB and Redis are deployed on Docker.

#### Find out more

You can find more information at the following GitHub repository:
https://github.com/VictorCyprien/barbuc-api
