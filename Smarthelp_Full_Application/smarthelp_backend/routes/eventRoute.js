const express = require("express");
const eventModel = require("../models/eventModel");

const {
    createEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

// create an event
router.post("/addevent", createEvent);

// get all events
router.get("/", getAllEvents);

// get an event
router.get("/:id", getEvent);

// update an event
router.put("/update/:id", updateEvent);

// delete an event
router.delete("/delete/:id", deleteEvent);

module.exports = router;
