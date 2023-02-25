const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
  tranpw: { type: String, required: true },
  mobile: { type: Number, required: true },
});

module.exports = mongoose.model("MobileNo", MobileSchema);
