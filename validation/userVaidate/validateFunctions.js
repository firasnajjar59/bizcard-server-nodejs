// joi schama
const newUserSchema=require("./userSchema")
const userLoginSchema=require("./userLoginSchema")
const userIdSchema=require("./userIdSchema")
// import validate joi function
const validate = require("../validateFunc");


// joi validate new user "register"
const validateNewUserSchema = (userInput) => {
    return validate(newUserSchema, userInput);
};

// joi validate user "login"
const validateUserLoginSchema = (userInput) => {
    return validate(userLoginSchema, userInput);
  };
// joi validate user "login"
const validateUserIdSchema = (userInput) => {
    return validate(userIdSchema, userInput);
  };



  module.exports = {
    validateNewUserSchema,validateUserLoginSchema,validateUserIdSchema
  };