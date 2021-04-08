const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routers/routes");
require("dotenv").config();

const app = express();
// set and use
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//
app.use(router);
// port

app.listen(process.env.PORT, () => {
  console.log(`Server Running ${process.env.PORT}`);
});
