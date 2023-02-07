const Joi = require("joi");


const userLoginSchema = Joi.object({
    email: Joi.string().min(2).required().trim(),
    password: Joi.string().min(5).max(255).required().trim()
  });

  module.exports = userLoginSchema