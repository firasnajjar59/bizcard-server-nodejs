const Joi = require("joi");

const idSchema = Joi.object({
    _id:Joi.string().length(24).hex().required().trim(),
  });
 

  module.exports = idSchema