const express = require("express");
const bodyParser = require("body-parser");

const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine','ejs');

const port = 3000;

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Listening at ${port}`);
});
