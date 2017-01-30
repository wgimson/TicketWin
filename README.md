# TicketWin
Ticketing App
This is intended to be the backend API for the TicketWin application. You need to have Node and NPM, as well as a running local instance of MongoDB. 

Create a database in MongoDB called ticketWin_DB.

Then clone the app and run...

<code>npm install</code>

To run the application type...

<code>gulp serve-dev</code>

The application should now be running. You can now submit queries against the API using postman, fiddler, etc. 

There is a json file called <code>seeds.json</code> in the <code>/app/data</code> directory which you can insert into your Mongo instance after creating an Events Collection in the ticketWin_DB (the database process will be improved and automated going forward, hopefully...)

To run error and style checking against the code run...

<code>gulp vet</code>

For testing run...

<code>gulp test</code>
