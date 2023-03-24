const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/clothing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected with mongodb");
});

module.exports = db;
