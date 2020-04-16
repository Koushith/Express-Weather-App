// path is a inbuilt node module. it is best practice to include this on top

const path = require("path");
const express = require("express");

const app = express(); //init express app

// middleware configuration

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //converts all into json
app.use(express.static("public")); //gives access to public folder
app.set("views", "views"); //looks for views folder
app.set("view engine", "hbs"); //crender all files which has hbs extension

//req will contain the info abou req comes back from client
// app.get("/", (req, res) => {
//   res.send("My First Express web Page!!");
// });   general example

// bad way of route, still works--- use express middlewares

// app.get("/", (req, res) => {
//   res.sendFile("index.html", {
//     root: path.join(__dirname, "../public/"),
//   });
// });

// middlewares
// when the user req home page, render home

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather finder by koushith",
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
