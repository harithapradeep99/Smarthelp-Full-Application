const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    eventVenue: {
        type: String,
        required: true,
    },
    eventStatus: {
        type: String,
        required: true,
    },
    projectID: {
        type: String,
        required: true,
    },

    // image: {
    //     data: Buffer,
    //     contentType: String,
    // },
    date: {
        type: Date,
        default: Date.now,
    },
    // supporters: {
    //     type: Array,
    // }
});

module.exports = mongoose.model("Event", eventSchema);
