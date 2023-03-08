const express = require("express");
const communityModel = require("../models/communityModel");

const {
    createCommunity,
    getAllCommunities,
    getCommunity,
} = require("../controllers/communityController");


const router = express.Router();

// create a community
router.post("/createCom", createCommunity);

// get all communities
router.get("/getAllCom", getAllCommunities);

// get a community
router.get("/getCom/:id", getCommunity);

module.exports = router;