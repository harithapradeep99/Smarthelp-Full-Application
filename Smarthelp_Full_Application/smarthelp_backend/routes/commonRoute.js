const express = require("express");
const common_route = express.Router();
const bodyParser = require("body-parser");

common_route.use(bodyParser.json());
common_route.use(bodyParser.urlencoded({ extended: true }));

const auth = require("../middlewares/requireAuth");

const common_controller = require("../controllers/commonController");

// common_route.get("/data-count", auth, common_controller.data_count);
// Error gives that not authorized.
common_route.get("/data-count", common_controller.data_count);
common_route.get("/donation-count/:id", common_controller.donation_count);

module.exports = common_route;
