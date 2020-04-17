// import axios to makr req

const axios = require("axios");

// API

const API_KEYS = "3f4c8efde8dfa7274ccb444191aa597f";

//  we are ready to export. controllers main job is to controll the flow

exports.renderHomePage = (req, res) => {
  res.render("index"); //we want to render index view
};

exports.renderAboutPage = (req, res) => {
  res.render("about"); //we want to render index view
};

exports.rendergetWeather = (req, res) => {
  const city = req.body.city; //city is coming from body of req. (replacement for value.)
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}`;
  axios
    .get(url)
    .then((response) => {
      //   console.log(
      //     `It is currently ${response.data.main.temp} in ${response.data.name}`
      //   );  this will display in console.
      // render his in web
      res.render("index", {
        Weather: `It is currently ${response.data.main.temp} in ${response.data.name}.`,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
