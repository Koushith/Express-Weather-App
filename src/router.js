const express = require("express");
const router = express.Router();

// inmport controller files

const controller = require("./controllers/controll");

router.get("/", controller.renderHomePage); //we are using controller, renderhome fun

// post request--request under home

router.post("/", controller.rendergetWeather);

router.get("/about", controller.renderAboutPage);

module.exports = router;
