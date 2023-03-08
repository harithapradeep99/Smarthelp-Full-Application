const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    projectID: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Donation", donationSchema);
