const Joi = require("joi");

const updateBizSchema = Joi.object({
    bizName: Joi.string().min(2).max(255).required().trim(),
    bizDescription: Joi.string().min(2).trim(),
    bizAddress: Joi.string().min(5).max(255).required().trim(),
    bizPhone: Joi.string()
      .min(2)
      .max(20)
      .regex(/^\+?(972\-?)?0?(([23489]{1}\-?\d{7})|[5]{1}\d{1}\-?\d{7})$/)
      .required(),
    bizImg: Joi.string().regex(/^http(s?)\:\/\/(\.?)/),
  });
 

  module.exports = updateBizSchema