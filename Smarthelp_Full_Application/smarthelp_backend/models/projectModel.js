const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    projectType: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    // owner: {
    //     type: String,
    //     required: true,
    // },
    // members: {
    //     type: Array,
    // },
    // tasks: {
    //     type: Array,
    // },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    // deadline: {
    //     type: Date,
    // },
    // priority: {
    //     type: String,
    // },
    // files: {
    //     type: Array,
    // },
});

module.exports = mongoose.model("Project", projectSchema);
