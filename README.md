# A tiny server #

# Development Environmnent #

The usual node setup.

setup: `npm install`

test: `npm run test`

run in development: `npm run dev`

run in production: `npm start`


# Routes #

## /health
Status and version

## /people
Returns some peoples, use size and offset for paging.

###Examples:###

- http://localhost:3000/people return all people
- http://localhost:3000/people?offset=0&size=3 , return the first three peoples
- http://localhost:3000/people?size=3 , also return the first three peoples
- http://localhost:3000/people?offset=3&size=3, return the next three peoples
