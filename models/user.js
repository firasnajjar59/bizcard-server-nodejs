const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isBiz:{type:Boolean, default:false},
  isAdmin:{type:Boolean, default:false}
});


const Users = mongoose.model("users", userSchema);

// create new user
const registerDB =  (userInput) => Users.create(userInput)

// login
const loginDB = (userInput) => Users.findOne(userInput);

// get user info by ...///
const userInfoDb = (userInput) =>  Users.findOne(userInput);



module.exports = { registerDB, loginDB,userInfoDb };