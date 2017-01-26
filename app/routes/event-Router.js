var express       = require('express'),
    dateFunctions = require('../utils/date_functions.js'),
    mongoose      = require('mongoose')
    Event         = require('../../app/models/event'); 

var router = express.Router();

router.use(function(req, res, next) {
    console.log('A route is being called');
    next();
});

router.route('/')
    .post(function(req, res) {
        var event = new Event();

        event.title              = req.body.title;
        event.description        = req.body.description;
        event.start_date         = req.body.start_date;
        event.end_date           = req.body.start_date;
        event.user_id            = mongoose.Types.ObjectId();
        event.created_at         = dateFunctions.getDate();
        event.updated_at         = null;
        event.status             = req.body.status;
        event.image_file_name    = req.body.image_file_name;
        event.image_content_type = req.body.image_content_type;
        event.image_file_size    = req.body.image_file_size;
        event.image_updated_at   = dateFunctions.getDate();
        event.location           = req.body.location;
        event.organization_id    = req.body.organization_id;
        event.is_featured        = req.body.is_featured;

        event.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json(event);
        });
    })
    .get(function(req, res) {
        Event.find(function(err, events) {
            if (err) {
                res.send(err);
            }
            res.json(events);
        });
    });

router.route('/:event_id')
    .get(function(req, res) {
        Event.findById(req.params.event_id, function(err, event) {
            if (err) 
                res.send(err);
            res.json(event);
        })
    })
    .put(function(req, res) {
        Event.findById(req.params.event_id, function(err, updatedEvent) {
            if (err) 
                res.send(err)

            updatedEvent.name = req.body.name;
            updatedEvent.owner = req.body.owner;
            updatedEvent.startDate = req.body.startDate;
            updatedEvent.endDate = req.body.endDate;

            updatedEvent.save(function(err) {
                if (err) 
                    res.send(err);
                res.json(updatedEvent)
            });
        });
    })
    .delete(function(req, res) {
        Event.remove({ _id: req.params.event_id }, function(err, event) {
            if (err)
                res.send(err)
            res.json(event);
        })
    });

router.route('/featured')
    .get(function(req, res) {
        Event.find({ 'is_featured': 'true'}, function(err, events) {
            if (err) {
                res.send(err);
            }
            res.json(events);
        })
    })

module.exports = router;