const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
    communityName: {
        type: String,
        required: true,
    },
    communityCategory: {
        type: String,
        required: true,
    },
    communityType: {
        type: String,
        required: true,
    },
    communityDescription: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    // communityMembers: {
    //     type: Array,
    // },
});

module.export = mongoose.model("Community", communitySchema);
