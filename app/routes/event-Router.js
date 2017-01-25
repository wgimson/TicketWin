var express = require('express')
    Event   = require('../../app/models/event'); 

var router = express.Router();

router.use(function(req, res, next) {
    console.log('A route is being called');
    next();
});

router.route('/')
    .post(function(req, res) {
        var event = new Event();

        event.name = req.body.name;
        event.owner = req.body.owner;
        event.startDate = req.body.startDate;
        event.endDate = req.body.endDate;

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
        })
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
    });

module.exports = router;