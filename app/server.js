// Import builtin NodeJS modules to instantiate the service


require("dotenv").config({ path: "./../.env" });
const { getListPrinter, allApisPrinter } = require("./apis/apiInfo");
const {sheduleListings}= require("./apis/sheduleListings")
//require('./features/upsertGgsheet')
const fs= require('fs')
var bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
// const apis = require("./apis/apiCrud");
const { apisSqlite } = require("./apis/apiSqlite");
const express = require("express");
const app = express();
const port = process.env.PORT || 3178;



const allowedOrigins = [
  "http://localhost:3179",
  "http://localhost:3179/#/",
  " http://localhost:18093",
  " http://localhost:8100",
];
//require('./apis/apiExcute')

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors({ origin: "*" }));
// https
//   .createServer({},app)
//   .listen(4000, ()=>{
//     console.log('server is runing at port 4000')
//   });
app.use(function (req, res, next) {
  // Website you wish to allow to connect

  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE", "X-Requested-With,content-type"
  );

  // Request headers you wish to allow
  // Pass to next layer of middleware
  next();
});

//============================================================

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.json({
    type: "*/*",
  })
);
// Function to serve all static files
// inside public directory.
app.use(express.static("public"));
// apis.callApis(app);
apisSqlite(app);
allApisPrinter(app);
sheduleListings(app);
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/imgs", express.static(path.join(__dirname, "imgs")));
app.use("/public", express.static("public"));
app.use("/app/public", express.static("public"));

app.get("/", (req, res, next) => {
  res.send("Api ready!");
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


module.exports = app;
