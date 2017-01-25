var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var EventSchema   = new Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    owner: String
});

module.exports = mongoose.model('Event', EventSchema);