# Noddy Bookstore Rest API
Base nodejs/mongo rest api. In other words, service api backed by mongodb.

Created from a baseline nodejs/mongo restapi. It's a noddy bookstore.

http://localhost:3000/
http://localhost:3000/api-docs -- swagger detailing available endpoints.

Mongo express included to view/fiddle with the db.
http://localhost:8081

Relies upon docker images of mongodb and mongo express.
Builds locally image of nodejs on alpine for the app.
Serves on port 3000.


To control:
- docker-compose up
- docker-compose up -d (to run headless)
- docker-compose down
- docker-compose down -v (remove volumes).

If making code changes to the app, then run before doing the "up"
- docker-compose build 

There is no ui for the app, it's just an api.
