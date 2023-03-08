# Playlister

The web application enables users to generate customized lists of YouTube videos and also allows them to listen to playlists created by other individuals.

## Technologies

### Frontend

React, NextJS, Tailwindcss, axios, pg

### Backend

Postgresql, jsonwebtoken

## Installation

```bash
git clone https://github.com/fkamouacs/playlister
```

Use the package manager [npm](https://nodejs.org/en/).

```bash
npm install
```

## Start

```bash
npm run dev
```

## Postgresql server

Use the createTables.sql file to setup postgresql tables.

create a .env.local file with the following variables

```env
PGSQL_USER=
PGSQL_PASSWORD=
PGSQL_HOST=
PGSQL_PORT=
PGSQL_DATABASE=

JWT_SECRET=
```

## Thoughts

Things I would have done differently: make use of redux or react context to manage state. It was messy using props to send state to lower components and back.
