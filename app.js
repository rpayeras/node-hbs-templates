require("dotenv").config();

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 3000;

// Handlebars
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "/views/partials"));

// Static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    author: "Roberto Payeras",
  });
});

app.get("/generic", (req, res) =>
  res.render("generic", {
    title: "Generic",
    author: "Roberto Payeras",
  })
);

app.get("/elements", (req, res) =>
  res.render("elements", {
    title: "Elements",
    author: "Roberto Payeras",
  })
);

app.get("/hello-world", (req, res) => res.send("Hello world 2"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
