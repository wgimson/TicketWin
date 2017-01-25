var express    = require('express'),   
    mongoose   = require('mongoose'),
    eventRouter = require('./app/routes/event-Router'),   
    bodyParser = require('body-parser');


var app = express();  
mongoose.connect('mongodb://localhost:27017/ticketWin_DB');             

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1337;

// REGISTER OUR ROUTES -------------------------------
// ===================================================
app.use('/api/events', eventRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);