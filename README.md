# Express/Knex/Objection

A simple scaffold application for showing database connection and management on Node.js
The guide leading to this result can be found [here](https://medium.com/@nicola.dallasen/express-knex-objection-painless-api-with-db-74512c484f0c).

## What's included

- `pg` - PostreSQL module
- `knex` - Query builder
- `objection` - ORM built upon Knex
- `express` - API framework

## What does it do

It provides a simple user/message database and shows how relation can be modelled with Objection Model class.
It also shows how to use eager loading to get related queries.

## How to use it

- Clone this repo: `git clone https://github.com/Fodark/express-knex-objection`
- `cd express-knex-objection`
- `npm install` to install required packages
- Modify database connection according to your machine in `knexfile.js`
- `npm start` to start the server
- Point to `localhost:3000/api/users` to test if it's working
