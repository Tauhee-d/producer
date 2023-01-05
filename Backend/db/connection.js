const mongoose = require("mongoose");
const dotenv = require("dotenv");


mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.DATABASE,
  // mongoose.set('strictQuery', true),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("db connected");
    else console.log("db  error");
  }
);
