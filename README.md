# Doricus
> Your preferred construction communication platform!

## Introduction
Doricus is a construction project management tool. It is intended to help Architects, Builders and Customers to efficiently communicate with each other.
By offering a clean platform, all parties can ensure they are up-to-date with the latest progress or comments. 

Currently the project is live at: https://doricus.herokuapp.com

## Technology Overview

Doricus is built in 2 parts: Frontend and Backend. 
The Frontend is built using Nuxt, Vuex, Axios and Vuetify. 
The Backend is built using Python with Flask.

This project was built to run on Heroku. As is, the project is ready to be fully deployed.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Deployment Setup

To deploy on Heroku, ensure the following environment variables are properly setup.
- BASE_URL (backend URL)
- HOST (default to 0.0.0.0)
- NODE_ENV (default to production)
- AUTH0_DOMAIN (Auth0 authentication domain)
- AUTH0_CLIENT (Auth0 Client Id)
- AUTH0_AUDIENCE (Auth0 API Audience)

With these parameters setup, the project is ready to be deployed on Heroku.

## Unfinished Functionality

Currently some features are still in progress. Please be mindfull that this is currently a beta.

- Edit Project
- Delete Project
- Edit Topic
- Delete Topic
- Add Builder to Project
- Add Customer to Project