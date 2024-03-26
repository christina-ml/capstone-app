# Welcome

Welcome to CryptoTalk.

This full stack web application was built using the PERN Stack.

Technologies: PostgreSQL, Express.js, React.js, Node.js, JavaScript, HTML, CSS, SCSS

## Deployed Links

The backend has been moved from Heroku to Adaptable.io

-   Frontend: https://cryptotalk-cl.netlify.app/
-   Backend: https://cryptotalk-cl.adaptable.app/

# About CryptoTalk
This is a personal project that I have been continuously working on since June 2022.

Reflecting on my journey, I'm thrilled to share the evolution of CryptoTalk.
This used to be a very different app. Following demo day, I made a bold decision to reset and reimagine my group's initial project idea. I made a detatched fork of the original capstone, and contemplated on the future of this app. I decided to remove nearly the entire code base, and started over. I wanted to make sure the project was entirely my own, and that I had a thorough understanding of each line of code.

Thus, a new CryptoTalk was born—a dynamic, educational app designed to enlighten users about cryptocurrencies, help them discover their preferred coins, and enjoy crypto-inspired games.

From the start, I've been on a relentless path of improvement, continuously enhancing features and adding new dimensions to the app. At the upcoming project showcase, I'll be diving into the core features of CryptoTalk through an engaging user story, offering a glimpse into its transformative power.

# Table of Contents
- [Welcome](#welcome)
  - [Deployed Links](#deployed-links)
- [About CryptoTalk](#about-cryptotalk)
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Basic commands to run the backend](#basic-commands-to-run-the-backend)
- [Frontend](#frontend)
  - [react-icons](#react-icons)
  - [Chart.js](#chartjs)
  - [axios](#axios)
  - [Basic command to run the frontend](#basic-command-to-run-the-frontend)
  - [Material UI](#material-ui)
    - [Installing Material UI](#installing-material-ui)
- [Backend](#backend)
  - [Entity Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
  - [Backend deployment](#backend-deployment)
    - [1. ElephantSQL \& Postico](#1-elephantsql--postico)
    - [2. Adaptable.io](#2-adaptableio)
    - [3. Netlify](#3-netlify)
- [One-to-many relationship (backend)](#one-to-many-relationship-backend)
- [Backend Routes](#backend-routes)
  - [Users Table](#users-table)
  - [Currencies Table](#currencies-table)
    - [All Coins Controller (currencies table)](#all-coins-controller-currencies-table)
    - [Currencies Controller (currencies table)](#currencies-controller-currencies-table)
  - [NFTs Table](#nfts-table)
- [CoinMarketCap API (where I got my data from)](#coinmarketcap-api-where-i-got-my-data-from)
  - [(Sandbox)](#sandbox)
- [Data used in this app](#data-used-in-this-app)
- [newsletter signup](#newsletter-signup)
    - [Material UI - toasts](#material-ui---toasts)
  - [Login](#login)
    - [Encrypt user passwords (Backend)](#encrypt-user-passwords-backend)
    - [JSON Web Tokens](#json-web-tokens)
  - [Error message](#error-message)
    - [Protected routes](#protected-routes)
- [Protected Routes](#protected-routes-1)
  - [AccountsController Route (backend)](#accountscontroller-route-backend)
    - [After protected routes exist](#after-protected-routes-exist)
  - [dark mode using local storage](#dark-mode-using-local-storage)
    - [Dark Mode colors:](#dark-mode-colors)
- [Miscellaneous Resources](#miscellaneous-resources)
  - [Timeline](#timeline)
- [Notes](#notes)
  - [Accessing](#accessing)
  - [Jest: JavaScript Testing Framework](#jest-javascript-testing-framework)
  - [Endpoints with `include` query for "tags"](#endpoints-with-include-query-for-tags)
  - [3-19-23 Postgres is a relational database](#3-19-23-postgres-is-a-relational-database)
      - [todo: 2-23-23](#todo-2-23-23)
    - [2-25-23 continuing login, authentication](#2-25-23-continuing-login-authentication)

# Overview

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

## Chart.js

https://www.chartjs.org/docs/latest/charts/line.html
https://www.npmjs.com/package/react-chartjs-2
https://upmostly.com/tutorials/how-to-use-chart-js-with-react

```
npm install chart.js
npm i react-chartjs-2
```

## axios

```
npm install axios
```

## Basic command to run the frontend

First, `cd` into the frontend directory using the terminal.

To run the frontend, you'll find this script in the `package.json` file.

```
npm start
```

This should open up automatically in the browser, but if it doesn't, go to
`http://localhost:[name of frontend port]`

example: `http://localhost:3000/`

## Material UI

I removed all Material UI from the first version of this app (with my capstone group), after I forked the project to make it my own. I am adding it back in thoughtfully, to help develop my understanding of what is necessary for each component and factoring in how much time and effort it would take to create these components from scratch to achieve similar results.

[Material UI](https://mui.com/) is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

I am using Material UI for these components:

-   Login Modal, for modal
-   UserNewForm, for username availability alerts

### Installing Material UI

```
npm install @mui/material @emotion/react @emotion/styled
```

for Loop icon (`LoginButton` component):

```
npm i @mui/icons-material
```

# Backend

## Entity Relationship Diagram (ERD)
<img src="./frontend/src/assets/erd2.png" alt="event-relational-database2"/>

## Backend deployment
### 1. ElephantSQL & Postico
-   Create instance with [elephantSQL](https://www.elephantsql.com/).
-   Add tables with seed data in "browser" tab on left.
-   SQL Query - copy & paste the tables from schema
-   SQL Query - copy & paste the tables from seed
-   open in Postico to view tables

### 2. Adaptable.io
-   [Adaptable.io](https://adaptable.io/)
-   add GitHub repository with node/postgres
-   go to settings in adaptable, edit "Runtime Environment"
    `DATABASE_URL` value: add the elephantSQL URL `postgres://......`
    `PG_HOST` value: elephantSQL server (without the parentheses) `[name].db.elephantsql.com`
    `PG_PORT` value: `5432`
    `PG_DATABASE` value: elephantSQL User & Default database
    `PG_USER` value: elephantSQL User & Default database
    `PG_PASSWORD` value: elephantSQL password
    <img src="./frontend/src/assets/adaptableEnvVars.png" alt="adaptable-runtime-environment-variables"/>

### 3. Netlify
-   add environment varialbe `REACT_APP_API_URL=` deployed adaptable link (without backslash at the end)
-   add environment variable `CI` with value of `false` (lowercase)
-   Clear cache & deploy site -> deployment is DONE, check deployed Netlify link that it works!

# One-to-many relationship (backend)

Models

Each model is represented by a table in the database.

-   Users
-   Currencies

Relationships

The tables have a one-to-many relationship

-   A user has many currencies
-   Each currency has a user

# Backend Routes

The backend database using [Postgres](https://www.postgresql.org/) has three tables: `users`, `resources`, and `favorites`. These are the routes for each table:

## Users Table

| Resource | Method | Route        | Description                              |
| -------- | ------ | ------------ | ---------------------------------------- |
| users    | GET    | /users       | Get all `users`.                         |
| users    | POST   | /users       | Create a `users`.                        |
| users    | GET    | /users/{uid} | Return one `users` by their id of {uid}. |
| users    | PUT    | /users/{uid} | Update one `users` by their id of {uid}. |
| users    | DELETE | /users/{uid} | Delete one `users` by their id of {uid}. |

## Currencies Table

### All Coins Controller (currencies table)

| Resource   | Method | Route        | Description                                                                     |
| ---------- | ------ | ------------ | ------------------------------------------------------------------------------- |
| currencies | GET    | /coins       | Get all `currencies` that exist in the database.                                |
| currencies | GET    | /coins/{cid} | Get one `currencies` by id of {cid} for every coin that exists in the database. |

### Currencies Controller (currencies table)

| Resource   | Method | Route             | Description                                                   |
| ---------- | ------ | ----------------- | ------------------------------------------------------------- |
| currencies | GET    | /currencies       | Get all `currencies` by id of {userId} that belong to a user. |
| currencies | GET    | /currencies/{cid} | Get one `currencies` by id of {cid} of a specific user.       |
| currencies | POST   | /currencies       | Create a `currencies`                                         |
| currencies | PUT    | /currencies/{cid} | Update one `currencies` by id of {cid}                        |
| currencies | DELETE | /currencies/{cid} | Delete one `currencies` by id of {cid}                        |

## NFTs Table

| Resource | Method | Route       | Description                             |
| -------- | ------ | ----------- | --------------------------------------- |
| nfts     | GET    | /nfts       | Get all `nfts`.                         |
| nfts     | GET    | /nfts/{nid} | Return one `nfts` by their id of {nid}. |


# CoinMarketCap API (where I got my data from)

I'm not using the API directly for this project, but instead using it as a starting point, so I can have some actual real-world data to work with.

[CoinMarketCap API Documentation](https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide)

## (Sandbox)

testing with sandbox environment (has mock data only):

```
sandbox-api.coinmarketcap.com
```

To get real data, replace sandbox with:

```
https://pro-api.coinmarketcap.com
```

1. Preferred method: Via a custom header named `X-CMC_PRO_API_KEY`
2. Convenience method: Via a query string parameter named:

```
CMC_PRO_API_KEY
```

test API Key:

```
b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c
```

Example link to fetch the data:

```
https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c
```

# Data used in this app

The data used in this app comes from the coinmarketcap API.

// 20220713205413 - July 13, 2022 8:54pm
Stored in backend file: `cryptoListingsLatest.json` for now
`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=` (add API Key to the ending of this URL in browser)


# newsletter signup

for backend:

```
npm install request
npm install body-parser
```

-   Reminder: Don't push the mailchimp API key to GitHub, or it will become inactive and will need to create a new one.

frontend:

-   Make new component for signup that takes in firstname, lastname, email.
-   New component has form, and hooks in React state for each input field
-   axios post request to backend using the values from user input, which sends the user inputs to the backend that will post to mailchimp to be stored.
-   Style the SCSS for the functional Signup component

---

2-26-23
adding `cookie-parser` on backend

```
npm install cookie-parser
```

Add to app.js:
`var cookieParser = require('cookie-parser');`
and
`app.use(cookieParser());`

---

### Material UI - toasts

Add Toasts to show user with Material UI
[https://mui.com/material-ui/react-alert/#toast](https://mui.com/material-ui/react-alert/#toast)
`App.js`:
Create toast with a useEffect() and give it a setTimeout() for 3 seconds

-   Set message when users log in

`LoginModal.js` pass in `setLoginMessage` as a prop

-   Then pass as prop into children/forms: `LoginAccountForm.js` and `CreateAccountForm.js`

## Login

### Encrypt user passwords (Backend)

Using [bcrypt](https://www.npmjs.com/package/bcrypt): A library to help you hash passwords.

```
npm install bcrypt
```

Go to users route, set variable
`const bcrypt = require('bcrypt');`

Go to POST route

### JSON Web Tokens

An implementation of [JSON Web Tokens](https://tools.ietf.org/html/rfc7519).
This was developed against `draft-ietf-oauth-json-web-token-08`. It makes use of [node-jws](https://github.com/brianloveswords/node-jws)

What is a JWT? [https://supertokens.com/blog/what-is-jwt](https://supertokens.com/blog/what-is-jwt)
Three parts: Header, Payload, Signature

Install [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

```
npm install jsonwebtoken
```

make utils folder
file: `jwt-helpers.js`
create tokens, for example (not full code - see file):

```
const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30d'});
const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'});
```

add to `.env` file - values can be anything

```
ACCESS_TOKEN_SECRET=randomTextHere
REFRESH_TOKEN_SECRET=somethingElseHere
```

(if not done already) install dotenv

```
npm install dotenv
```

set up tokens with `jwt-helpers.js` file - helper function
and send data

## Error message

```
Listening on port 3333
Error: data and salt arguments required
    at Object.hash (/Users/...<path here>.../capstone-app/backend/node_modules/bcrypt/bcrypt.js:137:17)
    at /Users/...<path here>.../capstone-app/backend/node_modules/bcrypt/promises.js:29:12
    at new Promise (<anonymous>)
```

What is "salt" [heynode.com](https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/#:~:text=A%20salt%20is%20a%20random%20string%20that%20makes%20the%20hash,storing%20it%20in%20a%20database.)
Before hashing a password, I need to apply a salt. A salt is a random string that makes the hash unpredictable.

Bcrypt is a popular and trusted method for salt and hashing passwords. You have learned how to use bcrypt's NodeJS library to salt and hash a password before storing it in a database. You have also learned how to use the bcrypt compare function to compare a password to a hash, which is necessary for authentication.

^^ Christina says:

-   Moved query into `usersController` and error is now gone?
-   still getting same error on frontend when making a POST request.

As of 1/28/23:
`UserNewForm.js` creates a new user with hashed password, but is not connected to the `LoginModal.js` in any way
`CreateAccountForm.js` doesn't create any user at all for some reason

^^ Issue resolved. The query on the backend had an error. It needed the variables to use the exact spelling as in the schema to work properly since I needed `user_password` instead of `password` for example.

Frontend: Error handling for when creating a new user:

-   username must be unique not null (unique on backend schema as well)
-   email must be unique (unique on backend schema as well)

To Do: Protected routes, to give access to only the user that is logged in.

### Protected routes

A user needs to be logged in to access a particular route
Example: An app has two routes:

-   /videos which is a page that lists videos
-   /profile is a page that shows a user's profile when logged in
    Example: /videos is a "hidden" route to a page with links to videos
    When a user is logged in, show a link for /videos
    When a user is logged out, can't see the link to /videos
    Example: /profile is a protected route
    Can only get to /profile if the user is logged in

Questions to ask:
What do you want to show someone when they're logged in?
What do you not want people to access when they're not logged in?
Example: /profile has user information about a user that you wouldn't want other users to see if they're not logged in

- Want to only fetch that user's information if the user is logged in

# Protected Routes

## AccountsController Route (backend)

Protected Route:
`http://localhost:3333/accounts` this is a route where a user needs to be logged in to access this route

Middleware - `Authorization.js` is middleware that goes into the AccountsController.js route.

```
accounts.get('/', authenticateToken, (req, res) => {
  ...// code here
}
```

It verifies the token before letting the user proceed to having access to the route.

// **_ You need to be logged in to acccess this route _**
// Example: http://localhost:3333/accounts
// get all accounts of all users
// json object has an `accountNumber` and `accountBalance` for each user as an array
// this information is not in the database, want to make sure a user can only get it if they are logged in
// middleware - will be in the middle of the route and callback function, call it "authenticateToken"
// if the token is authenticated, continue with the route

### After protected routes exist

Make sure they work properly when user is logged in/not logged in

-   Updating both backend and frontend to create additional protected routes
-   TODO: make page re-render after a user logs in


## dark mode using local storage

<!-- https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/ -->

```
npm i use-local-storage
```

Local storage allows the theme to be stored, so a user can keep seeing the "light" or "dark" mode that was chosen, after page reload.

### Dark Mode colors:

The recommended dark theme surface color by Material Design is: Dark Grey — #121212.
[Dark Mode UI Design: A Complete Guide](https://compilezero.medium.com/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129#:~:text=Using%20Dark%20Grey&text=The%20recommended%20dark%20theme%20surface,Dark%20Grey%20%E2%80%94%20%23121212.)


# Miscellaneous Resources

[Random password generator](https://passwordsgenerator.net/)

[Random username generator](https://jimpix.co.uk/words/random-username-generator.asp#results)

[Random email generator](https://generator.email/)

[Random US Cities](https://www.randomlists.com/random-us-cities)

Tooltip text: [HTML title Attribute](https://www.w3schools.com/tags/att_title.asp)

<!-- Markdown extension to create table of contents:
https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one -->
<!-- Stackoverflow article about markdown extension: https://stackoverflow.com/questions/18244417/how-do-i-create-some-kind-of-table-of-content-in-github-wiki -->

<!-- Information on getting a current date in JavaScript from JavaScript's "date" methods https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/#:~:text=In%20JavaScript%2C%20we%20can%20easily,%2C%20time%2C%20and%20time%20zone. -->

<!-- svg image used for DesktopColoring (svg with background) -->
<!-- https://www.iconpacks.net/free-icon/laptop-coin-2469.html -->
<!-- https://www.iconpacks.net/free-icon/mobile-phone-coin-2470.html -->

<!-- Layout Inspiration & Coin Logos -->
<!-- https://www.fxempire.com/crypto -->
<!-- Example: https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/ada.png -->

<!-- color palette inspiration: -->
<!-- https://colorswall.com/palette/83601 -->

<!-- image editor (used for About Me page backgrounds) -->
<!-- https://studio.pixelixe.com/#add-image-to-photo -->

<!-- RoboHash - generate robot icons -->
<!-- https://robohash.org/ -->

<!-- For adding new USERS to database on frontend with "Sign Up" form: -->
<!-- For Sign Up/New User form, when clicking "submit" button the user list wouldn't automatically update. Needed to refresh the page. -->
<!-- Doing an axios POST request inside the handleSubmit function fixes that issue. -->
<!-- https://stackoverflow.com/a/66925638/15496834 -->

<!-- home page - layout inspiration -->
<!-- https://sneakernews.com/ -->

<!-- Login Form in ReactJS with React Hooks (tutorial) -->
<!-- https://www.youtube.com/watch?v=91qEdc6dSUs -->

## Timeline
-   Capstone project: May - June 2022
    -   Contributors: Myself, and 3 other capstone team members
-   June 2022 - Present: I forked my own copy of this capstone project to be a personal project, where it is detatched from the original capstone group.
    -   All other contributors are detatched, and cannot collaborate on my forked copy of this project.
    -   Contributors: Myself ( **_IMPORTANT:_** This means only 1 person is working on this project, which is only me, the repository owner.)
-   I removed all frontend components built by the capstone group
-   I removed all backend tables and routes from the backend, aside from the main table `users` which I pair-programmed with, and although my GitHub account didn't "push" the code for this one table specifically, I would have coded it the same exact way.
-   Backend: Every table, query, and route on the backend is now my original code.
-   Frontend: Every component on the frontend is now my original code.

I have been continuously adding to this project weekly, as it is a personal project that I am:

-   making improvements
-   adding new features
-   improving those features
-   fixing bugs
-   creating bugs
-   testing my code to make sure it works
-   re-deploying both the backend and frontend. Please visit the deployed link.

# Notes
## Accessing

accessing Jwt accessToken on frontend for `newspaper.js`

```
npm i js-cookie
```

## Jest: JavaScript Testing Framework

This app has [Jest](https://jestjs.io/docs/api) testing.

Jest Supertest testing on backend:

-   `app.test.js` - integration testing

---

## Endpoints with `include` query for "tags"

(see below for regular endpoints without tags - will need to fix this in the README.md later to combine/organize tables)
| Resource | Method | Route | Description |
|------------|-------------|----------------------------------|--------------------------------|
| currencies | GET | /coins | all coins |
| currencies | GET | /coins?include=tags | all coins with tags |
| currencies | GET | /coins/{cid} | coin by coin id |
| currencies | GET | /coins/{cid}?include=tags | coin by coin id with tags |
| currencies | GET | /users/1/currencies | users with currencies |
| currencies | GET | /users/1/currencies?include=tags | users with currencies and tags |

## 3-19-23 Postgres is a relational database

Because Postgres is a relational database, the database cannot use an ARRAY[] data type in PostgreSQL.

The `currencies` table has this:

```
tags TEXT []
```

which is wrong. You should not do this in a relational database such as PostgreSQL.

Instead, do this:
Eliminate the array data type in the schema, and update everything.

1. Create New table: `tags`
2. Update `schema.sql`
3. Update currencies table seed data, add tags table seed data in `seed.sql`
4. Create/Update queries
5. Create/Update controllers
6. Test that it works, test all endpoints for getting correct results.
7. Test all queries, that are using `?include=tags`

To Do:
This breaks anywhere "tags" are used on the frontend. Will need to re-connect anywhere "tags" are used on the frontend.

-   What is the `/authenticate` route doing in the `usersController.js` file?
-   Does it do anything?
-   When testing it on backend only, returns error.
-   When testing it with frontend, still an error. Trying to show me a user named undefined that doesn't exist

```
users.get('/authenticate', async (req, res) => {
```

On the backend it gives me this:

```
// http://localhost:3333/users/authenticate

"Error: User ID not found"
```

#### todo: 2-23-23

On backend, getting error:

```
// http://localhost:3333/accounts

{
  "error": "Null Token"
}
```

This is because the json web token doesn't get stored in local storage on the backend.
The user is "logged in" but there's no way to tell, since the token isn't being saved on the backend once it's made, so it can't be checked for on the backend.

-   Is there a way to save on the backend that the "token does exist"? To know whether or not a user has been logged in, on the backend only?
-   Right now, the backend only sees that there is no token, so it responds with an error saying that the token is a "null token".

### 2-25-23 continuing login, authentication

Password validation - must be 6 characters or more

-   Make changes on both backend and frontend
-   backend: check password length & set error message
-   frontend: set error message for user to see

A cookie is better than using local storage.

Frontend: `CreateAccountForm.js`

Switching to using a `cookie` instead of localStorage.setItem()

```
/*
    - set the access token in localStorage to tell us the user is logged in
    - localStorage.setItem("accessToken", data.accessToken);
    - show that the user is logged in (specifcally the "log in"/"log out" button)

    Replacing `localStorage.setItem("accessToken".....` with a cookie
    - setting a cookie syntax:
*/
// save access token as a cookie
document.cookie = "accessToken=" + data.accessToken;
```

`loginAccountForm.js` make changes with cookie
Replacing this:
`localStorage.setItem('accessToken', data.accessToken);`
...with a cookie:

```
// save access token as a cookie
document.cookie = "accessToken=" + data.accessToken;
```

Check the NavBar
`App.js` - `loggedIn/setLoggedIn` hook
App is still using localStorage, and I want to change it to a cookie.
Make a new file:
src > utils > `cookieUtils.js`

After changing the hook for `loggedIn/setLoggedIn`, checking in browser:

-   a user is logged in
-   the `cookie` has replaced `localStorage`
-   the `accessToken` is now in `cookies`, and is not in `localStorage` anymore.

Todo: fix the logout functionality so that the `accessToken` in `cookies` can be removed.
`Navbar.js` - in logOut, delete cookie `accessToken`