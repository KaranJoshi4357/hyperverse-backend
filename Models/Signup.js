const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  referral: { type: String, required: true },
});

module.exports = mongoose.model("SignupSchema", signupSchema);
