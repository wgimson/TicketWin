var express    = require('express'),   
    mongoose   = require('mongoose'),
    eventRouter = require('./app/routes/event-Router'),  
    dbUtil      = require('./app/data/db.js'),
    bodyParser = require('body-parser');


var app = express();  

// CONNECT TO DB AND REGISTER DATA EVENT -------------
// ===================================================
dbUtil.dbConnect();             

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1337;

// REGISTER OUR ROUTES -------------------------------
// ===================================================
app.use('/api/events', eventRouter);

// START THE SERVER
// ===================================================
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;