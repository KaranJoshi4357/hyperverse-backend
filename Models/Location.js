const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  road: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  suburb: { type: String, required: true },
  fullAdd: { type: String, required: true },


});

module.exports = mongoose.model("UserLocation", locationSchema);
