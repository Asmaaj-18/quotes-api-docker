# Quotes App - Docker

## Description

Application Node.js permettant d'afficher des citations par thème avec une interface web moderne.

## Fonctionnalités

* Citations par thème (amour, succès, temps, fashion)
* Interface web avec design moderne
* Background dynamique selon le thème
* API Node.js avec Express

## Technologies

* Node.js
* Express
* Docker

## Installation

### Build de l’image Docker

```bash
docker build -t quotes-api .
```

### Lancer le conteneur

```bash
docker run -p 3000:3000 quotes-api
```

## Utilisation

Accéder à l'application :

```
http://localhost:3000
```

## Port utilisé

3000

## Docker Hub

Remplacer par votre lien :
https://hub.docker.com/r/asma1802/quotes-api

## Auteur

Asma Ajroudi
