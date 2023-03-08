const express = require("express");
const donationsModel = require("../models/donationsModel");

// controller functions
const {
    createDonation,
    getAllDonations,
} = require("../controllers/donationController");

const router = express.Router();

// create a donation
router.post("/adddonation", createDonation);

// get all donations
router.get("/getdonations", getAllDonations);

module.exports = router;
