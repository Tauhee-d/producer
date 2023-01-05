const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
  id:{
    type:Number,
    required:true
  },
  battery: {
    type: String,
    required: true
  },
  temperature:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model("TABLE", tableSchema);
