const mongoose = require("mongoose");

const uri4 =
  "mongodb://diode:4abZdAKhVEHzRzeP@cluster0-shard-00-00.h90po.mongodb.net:27017,cluster0-shard-00-01.h90po.mongodb.net:27017,cluster0-shard-00-02.h90po.mongodb.net:27017/clothing?ssl=true&replicaSet=atlas-3dolis-shard-0&authSource=admin&retryWrites=true&w=majority";

const uri3 = "mongodb://localhost:27017/clothing";

mongoose.connect(uri4, {
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
