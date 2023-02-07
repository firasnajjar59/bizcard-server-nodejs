// joi schema
const newBizSchema = require("./cardSchema");
const updateBizSchema = require("./cardUpdateSchema");
const idSchema = require("./cardIdSchema");
// import validate joi function
const validate = require("../validateFunc");

const validateNewCard = (userInput) => {
  return validate(newBizSchema, userInput);
};
const validateCardToUpdate = (userInput) => {
  return validate(updateBizSchema, userInput);
};
const validateIdSchema = (userInput) => {
  return validate(idSchema, userInput);
};

module.exports = {
  validateNewCard,
  validateCardToUpdate,
  validateIdSchema,
};
