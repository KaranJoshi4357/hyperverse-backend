const express = require("express");
const { connection } = require("./Config/db");
const cors = require("cors");
const app = express();
const UserLogin = require("./Models/Login");
const MobileNo = require("./Models/Mobile");
const Signup = require("./Models/Signup");
const UserLocation = require("./Models/Location");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.post("/location", async (req, res) => {
  const { city, road, state, fullAdd, suburb, pincode } = req.body;
  const location = new UserLocation({
    city,
    road,
    state,
    fullAdd,
    suburb,
    pincode,
  });
  console.log(location);
  await location.save();
  res.send("Location Added");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = new UserLogin({ username, password });
  await user.save();
  res.send("user created");
});
app.post("/number", async (req, res) => {
  const { mobile, transitionPw } = req.body;
  const mobileNo = new MobileNo({ mobile: mobile });
  await mobileNo.save();
  res.send("Mobile No Saved");
});
app.post("/signup", async (req, res) => {
  const { username, password, referral } = req.body;
  const userSignup = new Signup({ username, password, referral });
  await userSignup.save();
  res.send("User Created");
});
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
  console.log("App is runing on 8080");
});
