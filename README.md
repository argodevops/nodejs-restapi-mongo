# Noddy Bookstore Rest API with mongo db.
A simple nodejs/mongo rest api; a book repo with faux user login. 
There's no UI. 

Created from a baseline nodejs/mongo restapi, in other words, nicked and then just expanded upon/altered/hacked about.

Runs in docker containers. 3 containers used:
Nodejs API
Mongo DB
Mongo express (arbitrary - just useful to use if altering db, can delete).

DB pre-populated by script.
May have to manually clear volume on taking down if want fresh db each time.

To control:
- docker-compose up
- docker-compose up -d (to run headless)
- docker-compose down
- docker-compose down -v (remove volumes).

If making code changes to the app, don't forget to build image before running docker-compose up.
- docker-compose build
Or change the docker-compose to use an image of the app, and manually docker build / tag etc first.

If wanting to run from command line without docker-compose, config to point at whatever mongo db or canned version of one you have, and npm install, npm run dev.