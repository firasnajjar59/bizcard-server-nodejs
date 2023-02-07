const Joi = require("joi");

const newUserSchema = Joi.object({
    name: Joi.string().min(2).max(255).required().trim(),
    email: Joi.string().email().min(2).trim().required(),
    password: Joi.string().min(5).max(255).required().trim()
   
  });

  module.exports = newUserSchema