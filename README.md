# Capstone Team

* [Christina Loiacono](https://www.linkedin.com/in/christina-loiacono/)
* [Deborah Campos](https://www.linkedin.com/in/debdev3/)
* [Milton Clark](https://www.linkedin.com/in/milton-clark-93674b114/)
* [Oliver Chuzan](https://www.linkedin.com/in/oliverchuzan/)

# Deployed Links
Backend: [https://cryptotalk-cl.herokuapp.com/](https://cryptotalk-cl.herokuapp.com/)

Frontend: [https://cryptotalk-cl.netlify.app/](https://cryptotalk-cl.netlify.app/)

# Overview

## Entity Relationship Diagram (ERD)
<img src="./images/erd.png" alt="event-relational-database"/>

# Getting Started

After forking and cloning this project, run these commands on the backend:
```
npm i
```
You will need a `.env` file for the backend (with these fields completed)
```
PORT=
PG_HOST=
PG_PORT=
PG_DATABASE=
PG_USER=
PG_PASSWORD=
```

## Basic commands to run the backend

First, `cd` into the backend directory using the terminal.

To run the backend, you'll find these scripts in the `package.json` file.
Run them **in this order** to initialize the database, seed the database, and then start the backend.

```
npm run db:init
npm run db:seed
npm start
```

Go to your browser, and go to 
`http://localhost:[name of backend port]`

example: `http://localhost:3333/`

# Frontend

After forking and cloning this project, run these commands on the frontend:
```
npm i
```

In a previous version of this app, Material UI was used. It has been removed.

In case there are issues with [Material UI](https://mui.com/), run this command: 
```
npm install @mui/material @emotion/react @emotion/styled

```

This app will now be using CSS and SASS.
[Node-Sass]():
```
npm install node-sass
```

## react-icons
[react-icons](https://react-icons.github.io/react-icons)

```
npm install react-icons --save
```
Example: Mobile layout - collapsible menu icon

## Basic command to run the frontend

First, `cd` into the frontend directory using the terminal.

To run the frontend, you'll find this script in the `package.json` file.

```
npm start
```

This should open up automatically in the browser, but if it doesn't, go to 
`http://localhost:[name of frontend port]`

example: `http://localhost:3000/`

# Backend Routes

Our backend database using [Postgres](https://www.postgresql.org/) has three tables: `users`, `resources`, and `favorites`.  These are the routes for each table:

## Users Table

| Resource | Method | Route       | Description                           |
|----------|--------|-------------|---------------------------------------|
| users    | POST   | /users      | Create a `user`.                        |
| users    | GET    | /users/{id} | Return one `users` by their id of {id}. |
| users    | PUT    | /users/{id} | Update one `users` by their id of {id}. |
| users    | DELETE | /users/{id} | Delete one `users` by their id of {id}. |

## Resources Table

| Resource  | Method | Route                      | Description                                                                  |
|-----------|--------|----------------------------|------------------------------------------------------------------------------|
| resources | GET    | /users/{id}/resources      | Return all `resources` associated with the `users` with and id of {id}.          |
| resources | GET    | /users/{id}/resources/{id} | Return details of one `resource` associated with the `users` with an id of {id}. |

## Favorites Table

| Resource  | Method | Route                      | Description                                                                      |
|-----------|--------|----------------------------|----------------------------------------------------------------------------------|
| favorites | GET    | /users/{id}/favorites      | Return all `favorites` associated with the `users` with and id of {id}.          |
| favorites | GET    | /users/{id}/favorites/{id} | Return details of one `favorite` associated with the `users` with an id of {id}. |
| favorites | POST   | /users/{id}/favorites      | Creates a new `favorite` associated with the `user` with an id of {id}.          |
| favorites | DELETE | /users/{id}/favorites/{id} | Deletes one `favorite` associated with the `users` with an id of {id}.           |

## Not Currently in Use / Potential Stretch for Admin 
| resources | POST   | /users/{id}/resources      | Creates a new `resource` associated with the `user` with an id of {id}.          |
| resources | PUT    | /users/{id}/resources/{id} | Updates one `resource` associated with the `users` with an id of {id}.           |
| resources | DELETE | /users/{id}/resources/{id} | Deletes one `resource` associated with the `users` with an id of {id}.           |
