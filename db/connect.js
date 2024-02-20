const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
      // connection code
      console.log(err);
    }
  );
};

module.exports = connectDB;
