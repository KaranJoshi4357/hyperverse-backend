const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
  mobile: { type: Number, required: true },
});

module.exports = mongoose.model("MobileNo", MobileSchema);
