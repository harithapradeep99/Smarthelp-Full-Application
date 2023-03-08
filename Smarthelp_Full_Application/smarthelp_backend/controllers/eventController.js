const Event = require("../models/eventModel");

// create an event -------->>>>>>>

const createEvent = async (req, res) => {
    let newEvent = new Event(req.body);

    newEvent.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: "Event craeted successfully",
        });
    });
};

// get all events -------->>>>>>>

const getAllEvents = async (req, res) => {
    Event.find()
        .sort({ created: -1 })
        .exec((err, events) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                });
            }
            return res.status(200).json({
                success: true,
                existingEvents: events,
            });
        });
};

// get an event -------->>>>>>>

const getEvent = async (req, res) => {
    let eventId = req.params.id;

    Event.findById(eventId, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            event,
        });
    });
};

// update an event -------->>>>>>>

const updateEvent = async (req, res) => {
    let eventId = req.params.id;

    Event.findByIdAndUpdate(
        eventId,
        {
            $set: req.body,
        },
        (err, event) => {
            if (err) {
                return res.status(400).json({ error: err });
            }

            return res.status(200).json({
                success: "Updated successfully",
            });
        }
    );
};

// delete an event -------->>>>>>>

const deleteEvent = async (req, res) => {
    Event.findByIdAndRemove(req.params.id).exec((err, deletedEvent) => {
        if (err)
            return res.status(400).json({
                message: "Delete unsuccesfull",
                err,
            });

        return res.json({
            message: "Delete succesfull",
            deletedEvent,
        });
    });
};

module.exports = {
    createEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
};
