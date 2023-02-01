## Login 
### Encrypt our passwords (Backend)
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
Before hashing a password, we apply a salt. A salt is a random string that makes the hash unpredictable.

Bcrypt is a popular and trusted method for salt and hashing passwords. You have learned how to use bcrypt's NodeJS library to salt and hash a password before storing it in a database. You have also learned how to use the bcrypt compare function to compare a password to a hash, which is necessary for authentication.

^^ Christina says:
- Moved query into `usersController` and error is now gone?
- still getting same error on frontend when making a POST request.

As of 1/28/23:
`UserNewForm.js` creates a new user with hashed password, but is not connected to the `LoginModal.js` in any way
`CreateAccountForm.js` doesn't create any user at all for some reason

^^ Issue resolved. The query on the backend had an error. It needed the variables to use the exact spelling as in the schema to work properly since I needed `user_password` instead of `password` for example.

Frontend: Error handling for when creating a new user:
 - username must be unique not null (unique on backend schema as well)
 - email must be unique (unique on backend schema as well)

To Do: Protected routes, to give access to only the user that is logged in.


### Protected routes
A user needs to be logged in to access a particular route
Example: An app has two routes: 
- /videos which is a page that lists videos
- /profile is a page that shows a user's profile when logged in
Example: /videos is a "hidden" route to a page with links to videos
When a user is logged in, show a link for /videos
When a user is logged out, can't see the link to /videos
Example: /profile is a protected route
Can only get to /profile if the user is logged in

Questions to ask:
What do you want to show someone when they're logged in?
What do you not want people to access when they're not logged in?
Example: /profile has user information about a user that you wouldn't want other users to see if they're not logged in
- we want to only fetch that user's information if the user is logged in


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

// *** You need to be logged in to acccess this route ***
// Example: http://localhost:3333/accounts
// get all accounts of all of our users
// json object has an `accountNumber` and `accountBalance` for each user as an array
// this information is not in our database, want to make sure we can only get it if we are logged in
// middleware - will be in the middle of our route and callback function, call it "authenticateToken"
    // if the token is authenticated, continue with our route


---
1/11/23
TO DO (backend):

Add brackets:
{{{{{{ to the coins table - TAGS
https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-array/

---------


# Deployment
Deployed Links:
* Frontend: https://cryptotalk-cl.netlify.app/
* Backend: https://cryptotalk-cl.adaptable.app/


Backend deployment (directions):
#### ElephantSQL & Postico
- Create instance with [elephantSQL](https://www.elephantsql.com/).
- Add tables with seed data in "browser" tab on left.
- SQL Query - copy & paste the tables from schema
- SQL Query - copy & paste the tables from seed
- open in Postico to view tables

#### Adaptable.io
- [Adaptable.io](https://adaptable.io/)
- add GitHub repository with node/postgres
- go to settings in adaptable, edit "Runtime Environment"
`DATABASE_URL` value: add the elephantSQL URL `postgres://......`
`PG_HOST` value: elephantSQL server (without the parentheses) `[name].db.elephantsql.com`
`PG_PORT` value: `5432`
`PG_DATABASE` value: elephantSQL User & Default database
`PG_USER` value: elephantSQL User & Default database
`PG_PASSWORD` value: elephantSQL password
<img src="./frontend/src/assets/adaptableEnvVars.png" alt="adaptable-runtime-environment-variables"/>

#### Netlify
- add environment varialbe `REACT_APP_API_URL=` deployed adaptable link (without backslash at the end)
- add environment variable `CI` with value of `false` (lowercase)
- Clear cache & deploy site -> deployment is DONE, check deployed Netlify link that it works!


## Entity Relationship Diagram (ERD)
<img src="./frontend/src/assets/erd2.png" alt="event-relational-database2"/>


## september - TO DO
// Currencies.scss -> for User details page

// to do: get backend working for the 3rd table (and tested in backend, to be able to access the data in the 3rd table)

## (end of To Do section)

Adding to schema:

mine: logo (for the url images of coin logos)

----rest of API data----:

platform TEXT,

self_reported_circulating_supply TEXT,
self_reported_market_cap TEXT,
tvl_ratio TEXT,
last_updated TIMESTAMP,
price INTEGER,
volume_24h BIGINT,
volume_change_24h SMALLINT,
percent_change_1h SMALLINT,
percent_change_24h SMALLINT,
percent_change_7d SMALLINT,
percent_change_30d SMALLINT,
percent_change_60d SMALLINT,
percent_change_90d SMALLINT,
market_cap BIGINT,
market_cap_dominance SMALLINT,
fully_diluted_market_cap BIGINT,
tvl TEXT,


// platform can be 'null' or be an object
"platform": {
          "pid": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },

<!-- home page - layout inspiration -->
<!-- https://sneakernews.com/ -->

<!-- Login Form in ReactJS with React Hooks (tutorial) -->
<!-- https://www.youtube.com/watch?v=91qEdc6dSUs -->

## dark mode using local storage
<!-- https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/ -->

```
npm i use-local-storage
```
Local storage allows the theme to be stored, so a user can keep seeing the "light" or "dark" mode that was chosen, after page reload.

### Dark Mode colors:
The recommended dark theme surface color by Material Design is: Dark Grey — #121212.
[Dark Mode UI Design: A Complete Guide](https://compilezero.medium.com/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129#:~:text=Using%20Dark%20Grey&text=The%20recommended%20dark%20theme%20surface,Dark%20Grey%20%E2%80%94%20%23121212.)


# One-to-many relationship (backend)

Models

Each model is represented by a table in the database.
- Users
- Currencies

Relationships

The tables have a one-to-many relationship

- A user has many currencies
- Each currency has a user

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

// 20220713205413 - July 13, 2022 8:54pm
Stored in backend file: `cryptoListingsLatest.json` for now
`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=` (add API Key to the ending of this URL in browser)



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
<img src="./frontend/src/assets/erd.png" alt="event-relational-database"/>

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

As mentioned eariler, I had removed all Material UI from the first version of this app (with my capstone group), after I forked the project to make it my own. I am adding it back in thoughtfully, to help develop my understanding of what is necessary for each component and factoring in how much time and effort it would take to create these components from scratch to achieve similar results.

[Material UI](https://mui.com/) is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

I am using Material UI for these components:
 - Login Modal, for modal
 - UserNewForm, for username availability alerts

### Installing Material UI
```
npm install @mui/material @emotion/react @emotion/styled
```

for Loop icon (`LoginButton` component):
```
npm i @mui/icons-material
```


# Backend Routes

Our backend database using [Postgres](https://www.postgresql.org/) has three tables: `users`, `resources`, and `favorites`.  These are the routes for each table:

## Users Table

| Resource | Method | Route        | Description                              |
|----------|--------|--------------|------------------------------------------|
| users    | GET    | /users       | Get all `users`.                         |
| users    | POST   | /users       | Create a `users`.                        |
| users    | GET    | /users/{uid} | Return one `users` by their id of {uid}. |
| users    | PUT    | /users/{uid} | Update one `users` by their id of {uid}. |
| users    | DELETE | /users/{uid} | Delete one `users` by their id of {uid}. |

<!-- ## Platforms Table
| Resource      | Method | Route        | Description                              |
|---------------|--------|--------------|------------------------------------------|
| platforms    | GET    | /platforms  | Get all `platforms` by id of {currId} that belong to a currency.    
| platforms    | GET    | /platforms/{token_address}  | Get one `platforms` by id of {token_address} of a specific currency. 
| platforms    | POST   | /platforms  | Create a `platforms`
| platforms    | PUT    | /platforms/{token_address}  | Update one `platforms` by id of {token_address}
| platforms    | DELETE | /platforms/{token_address}  | Delete one `platforms` by id of {token_address} -->

## Currencies Table
### All Coins Controller (currencies table)

| Resource      | Method | Route        | Description                              |
|---------------|--------|--------------|------------------------------------------|
| currencies    | GET    | /coins  | Get all `currencies` that exist in the database.                 |
| currencies    | GET    | /coins/{cid}  | Get one `currencies` by id of {cid} for every coin that exists in the database. 

### Currencies Controller (currencies table)

| Resource      | Method | Route        | Description                              |
|---------------|--------|--------------|------------------------------------------|
| currencies    | GET    | /currencies  | Get all `currencies` by id of {userId} that belong to a user.    
| currencies    | GET    | /currencies/{cid}  | Get one `currencies` by id of {cid} of a specific user. 
| currencies    | POST   | /currencies  | Create a `currencies`
| currencies    | PUT    | /currencies/{cid}  | Update one `currencies` by id of {cid}
| currencies    | DELETE | /currencies/{cid}  | Delete one `currencies` by id of {cid}

## NFTs Table

| Resource | Method | Route        | Description                              |
|----------|--------|--------------|------------------------------------------|
| nfts     | GET    | /nfts        | Get all `nfts`.                          |
| nfts     | GET    | /nfts/{nid}  | Return one `nfts` by their id of {nid}.  |

<!-- ## Resources Table

| Resource  | Method | Route                      | Description                                                                  |
|-----------|--------|----------------------------|------------------------------------------------------------------------------|
| resources | GET    | /users/{id}/resources      | Return all `resources` associated with the `users` with and id of {id}.          |
| resources | GET    | /users/{id}/resources/{id} | Return details of one `resource` associated with the `users` with an id of {id}. | -->

<!-- ## Favorites Table

| Resource  | Method | Route                      | Description                                                                      |
|-----------|--------|----------------------------|----------------------------------------------------------------------------------|
| favorites | GET    | /users/{id}/favorites      | Return all `favorites` associated with the `users` with and id of {id}.          |
| favorites | GET    | /users/{id}/favorites/{id} | Return details of one `favorite` associated with the `users` with an id of {id}. |
| favorites | POST   | /users/{id}/favorites      | Creates a new `favorite` associated with the `user` with an id of {id}.          |
| favorites | DELETE | /users/{id}/favorites/{id} | Deletes one `favorite` associated with the `users` with an id of {id}.           | -->

<!-- ## Not Currently in Use / Potential Stretch for Admin 
| Resource | Method | Route        | Description                            |
|----------|--------|--------------|----------------------------------------|
| resources | POST   | /users/{id}/resources      | Creates a new `resource` associated with the `user` with an id of {id}. |
| resources | PUT    | /users/{id}/resources/{id} | Updates one `resource` associated with the `users` with an id of {id}. |
| resources | DELETE | /users/{id}/resources/{id} | Deletes one `resource` associated with the `users` with an id of {id}. | -->


## Miscellaneous

[Random password generator](https://passwordsgenerator.net/)

[Random username generator](https://jimpix.co.uk/words/random-username-generator.asp#results)

[Random email generator](https://generator.email/)

[Random US Cities](https://www.randomlists.com/random-us-cities)

Tooltip text: [HTML title Attribute](https://www.w3schools.com/tags/att_title.asp)

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