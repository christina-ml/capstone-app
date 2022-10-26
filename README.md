## october - TO DO
## Firebase
a Firebase project is a Google Cloud project
(Christina says: using pursuit)

## user authentication/login
Firebase: https://firebase.google.com/docs/auth/web/firebaseui
Before you begin: https://firebase.google.com/docs/web/setup
Understand Firebase projects: https://firebase.google.com/docs/projects/learn-more
Firebase console: https://console.firebase.google.com/
  - Project name: cryptotalk-cl
  - Enable Google Analytics for this project
  Google Analytics is a free and unlimited analytics solution that enables targeting, reporting, and more in Firebase Crashlytics, Cloud Messaging, In-App Messaging, Remote Config, A/B Testing, and Cloud Functions.

1. Register App:
- Add Firebase to your web app
  App nickname: cryptotalk-cl
  - Also set up Firebase Hosting for this app. 
    Hosting can also be set up later. There is no cost to get started anytime.
    (https://firebase.google.com/docs/hosting/?authuser=0&hl=en)

2. Add Firebase SDK
(SDK stands for software development kit)
(Christina says: The documentation doesn't specify how to do this for a "monorepo" - if this gets installed on entire app, backend only, or frontend only. ASSUMING it's backend. I am installing firebase to backend only.  All the documentation says to do is "install"...)
```
npm install firebase
```
Christina says: I don't understand this, so I went to Firebase's YouTube: https://www.youtube.com/watch?v=rQvOAnNvcNQ

3. Install Firebase CLI
```
npm install -g firebase-tools
```

4. Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
- Sign in to Google
```
firebase login
```
- Initiate your project
Run this command from your app’s root directory:
```
firebase init
```

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choi
ces. Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance, Firestor
e: Configure security rules and indexes files for Firestore, Functions: Configure a Cloud Functions directory and its files, Hostin
g: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys, Hosting: Set up GitHub Action deploys, Stora
ge: Configure a security rules file for Cloud Storage, Emulators: Set up local emulators for Firebase products, Remote Config: Conf
igure a template file for Remote Config

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: cryptotalk-cl (cryptotalk-cl)
i  Using project cryptotalk-cl (cryptotalk-cl)

=== Database Setup
i  database: ensuring required API firebasedatabase.googleapis.com is enabled...
⚠  database: missing required API firebasedatabase.googleapis.com. Enabling now...
✔  database: required API firebasedatabase.googleapis.com is enabled

? It seems like you haven’t initialized Realtime Database in your project yet. Do you want to set it up? Yes
? Please choose the location for your default Realtime Database instance: us-central1
✔ Creating your default Realtime Database instance: cryptotalk-cl-default-rtdb

Firebase Realtime Database Security Rules allow you to define how your data should be
structured and when your data can be read from and written to.

? What file should be used for Realtime Database Security Rules? database.rules.json
✔  Database Rules for cryptotalk-cl-default-rtdb have been written to database.rules.json.
Future modifications to database.rules.json will update Realtime Database Security Rules when you run
firebase deploy.

=== Firestore Setup

Error: It looks like you haven't used Cloud Firestore in this project before. Go to https://console.firebase.google.com/project/cryptotalk-cl/firestore to create your Cloud Firestore database.

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? firestore.rules

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? firestore.indexes.json

=== Functions Setup
Let's create a new codebase for your functions.
A directory corresponding to the codebase will be created in your project
with sample code pre-configured.

See https://firebase.google.com/docs/functions/organize-functions for
more information on organizing your functions using codebases.

Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/.eslintrc.js
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes

added 329 packages, and audited 330 packages in 10s

38 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? Yes
✔  Wrote public/index.html

i  Detected a .git folder at /Users/christina/Desktop/PURSUIT/module6/week7/capstone-app
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=317508884&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...
Authorizing will redirect to
http://localhost:9005
Firebase CLI GitHub Login Successful

Waiting for authentication...

✔  Success! Logged into GitHub as christina-ml

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) christina-ml/capstone-app

✔  Created service account github-action-502100437 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_CRYPTOTALK_CL.
i  You can manage your secrets at https://github.com/christina-ml/capstone-app/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? npm ci && npm run build

✔  Created workflow file /Users/christina/Desktop/PURSUIT/module6/week7/capstone-app/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? main

✔  Created workflow file /Users/christina/Desktop/PURSUIT/module6/week7/capstone-app/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? storage.rules
✔  Wrote storage.rules

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication
 Emulator, Functions Emulator, Firestore Emulator, Database Emulator, Hosting Emulator, Pub/Sub Emulator, Storage Emulator, Eventarc 
Emulator
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the database emulator? 9000
? Which port do you want to use for the hosting emulator? 5000
? Which port do you want to use for the pubsub emulator? 8085
? Which port do you want to use for the storage emulator? 9199
? Which port do you want to use for the eventarc emulator? 9299
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? 
? Would you like to download the emulators now? Yes

=== Remoteconfig Setup
? What file should be used for your Remote Config template? remoteconfig.template.json

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!



- When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:
```
firebase deploy
```
After deploying, view your app at `cryptotalk-cl.web.app` (https://cryptotalk-cl.web.app/)

Need help? Check out the `Hosting docs` (https://firebase.google.com/docs/hosting/quickstart?authuser=0&hl=en)

=== Deploying to 'cryptotalk-cl'...

i  deploying database, storage, firestore, functions, hosting, remoteconfig
Running command: npm --prefix "$RESOURCE_DIR" run lint

> lint
> eslint .

✔  functions: Finished running predeploy script.
i  database: checking rules syntax...
✔  database: rules syntax for database cryptotalk-cl-default-rtdb is valid
i  firebase.storage: checking storage.rules for compilation errors...
✔  firebase.storage: rules file storage.rules compiled successfully
i  firestore: reading indexes from firestore.indexes.json...
i  cloud.firestore: checking firestore.rules for compilation errors...
✔  cloud.firestore: rules file firestore.rules compiled successfully
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudfunctions.googleapis.com is enabled
⚠  artifactregistry: missing required API artifactregistry.googleapis.com. Enabling now...
⚠  functions: missing required API cloudbuild.googleapis.com. Enabling now...

Error: Your project cryptotalk-cl must be on the Blaze (pay-as-you-go) plan to complete this command. Required API artifactregistry.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL:

https://console.firebase.google.com/project/cryptotalk-cl/usage/details

Having trouble? Try firebase [command] --help

`***** Christina says: Deploying did not work - uninstalled and deleted firebase. *****`

# Installing Firebase 10/6/22
1. Register app
2. Add Firebase SDK
  - added `getAuth`
  - https://firebase.google.com/docs/web/setup explains the browser module link from the YouTube video (https://www.youtube.com/watch?v=rQvOAnNvcNQ&list=PLl-K7zZEsYLnfwBe4WgEw9ao0J0N1LYDR&index=8&t=194s):
  ```
  Do you use ESM and want to use browser modules? Replace all your import lines to use the following pattern:
  import { } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-SERVICE.js'
  (where SERVICE is an SDK name such as firebase-firestore).
  Using browser modules is a quick way to get started, but we recommend using a module bundler for production.
  ```

Video says to run command `serve src/` => YouTube video comments says: `npm install -g serve`
```
   ┌─────────────────────────────────────────────────┐
   │                                                 │
   │   Serving!                                      │
   │                                                 │
   │   - Local:            http://localhost:3000     │
   │   - On Your Network:  http:// <IP address> :3000   │
   │                                                 │
   │   Copied local address to clipboard!            │
   │                                                 │
   └─────────────────────────────────────────────────┘     
```

// Import the functions you need from the SDKs you need (adding browser module paths)
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// they don't recommend using the browser modules in the video for production. Instead, they say use webpack for production.
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

`npm install webpack webpack-cli -D`

module bundlers look for a file called an entry point. This is the root of your JavaScript code, and it usually imports everything needed for the application. Dash o for an output folder of dist.
"node_modules/.bin/webpack --entry ./src/index.js -o dist"
BUT PRO TIP: if your entry point is located at `src/index.js` and your output file needs to be `dist/main.js`, then you can drop all of these flags.
"node_modules/.bin/webpack"
Now we have our main.js file and our dist folder.
Christina says: I did this command:
`node_modules/.bin/webpack --entry ./src/index.js -o dist`

(They didn't fix anything from this warning in the video):
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

1 warning has detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.
```


change index.html to say "main.js" and run the serve command again
`serve dist/`

make a `webpack.config.js` file, add source maps (https://webpack.js.org/configuration/devtool/)

run build command:
`node_modules/.bin/webpack`
`node_modules/.bin/webpack --entry ./src/index.js -o dist`

Now we have our bundle.js in the dist folder
Rename the file in index.html to `bundle.js`
run the `serve dist/` command

^^^  Christina says: This did NOT work....for webpack.

3. Install Firebase CLI
4. Deploy to Firebase Hosting
  - firebase login
  - firebase init
    - only choosing "hosting" options this time
  - firebase deploy

=== Deploying to 'cryptotalk-cl-5c7b8'...

i  deploying hosting
i  hosting[cryptotalk-cl-5c7b8]: beginning deploy...
i  hosting[cryptotalk-cl-5c7b8]: found 1 files in public
✔  hosting[cryptotalk-cl-5c7b8]: file upload complete
i  hosting[cryptotalk-cl-5c7b8]: finalizing version...

Error: Failed to list functions for cryptotalk-cl-5c7b8


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

<!-- svg image used for DesktopColoring (svg with background) -->
<!-- https://www.iconpacks.net/free-icon/laptop-coin-2469.html -->
<!-- https://www.iconpacks.net/free-icon/mobile-phone-coin-2470.html -->


<!-- Layout Inspiration & Coin Logos -->
<!-- https://www.fxempire.com/crypto -->
<!-- Example: https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/ada.png -->


<!-- color palette inspiration: -->
<!-- https://colorswall.com/palette/83601 -->