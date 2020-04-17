// import axios to makr req

const axios = require("axios");

// API

const API_KEYS = "3f4c8efde8dfa7274ccb444191aa597f";

const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEYS}`;

//  we are ready to export. controllers main job is to controll the flow

exports.renderHomePage = (req, res) => {
  res.render("index"); //we want to render index view
};

exports.renderAboutPage = (req, res) => {
  res.render("about"); //we want to render index view
};

exports.rendergetWeather = (req, res) => {
  const city = req.body.city; //city is coming from body of req. (replacement for value.)
  axios
    .get(url)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
