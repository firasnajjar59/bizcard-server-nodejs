// users joi validation functions
const {
  validateUserLoginSchema,
  validateNewUserSchema,validateUserIdSchema
} = require("../../validation/userVaidate/validateFunctions");
// mongoose functions
const { registerDB, loginDB,userInfoDb } = require("../../models/user");
// global functions to controllers
const {getHeadersToken}=require("../globalControllersFunc")
// bcrypt
const {genPassword,comparePassword} = require("../../config/bcrypt");
// jwt
const {genToket,decodeToken} = require("../../config/jwt");
// debug
const debug = require("debug")("bizcard:userController");
// chalk
const chalk = require("chalk");

// *controllers
//register controller
const register = async (req, res) => {
  try {
    const validatedData = await validateNewUserSchema(req.body);
    const hash=await genPassword(validatedData.password);
    validatedData.password=hash
    const data = await registerDB(validatedData);
    res.json({ status: "200", message: "success", data: data });
  } catch (err) {
    res
      .status(400)
      .json({ status: "400", message: "error", data: err.details });
    debug(
      chalk.redBright(
        JSON.stringify({
          status: "400",
          message: "faild",
          data: err.details,
        })
      )
    );
  }
};
//login controller
const login = async (req, res) => {
  try {
    // const validatedData = await validateUserLoginSchema(req.body);
    const user = await loginDB({email:req.body.email});
    if(!user)throw "invalid email or password"
    const isEqual= await comparePassword(req.body.password,user.password)
    if(!isEqual)throw "invalid email or password"
    const token=await genToket({
      email:user.email,
      _id:user._id,
      isBiz:user.isBiz,
      isAdmin:user.isAdmin
    })
    res.json({ message: "success", token: token });
  } catch (err) {
    res.json({ message: "error", data: err });
    console.log(err);
  }
};
//login controller
const userInfo = async (req, res) => {
  try {
    const user=await getHeadersToken(req)
    const data = await userInfoDb({id:user._id});
    res.status(200).json({statusCode:200, message: "success", data: data });
  } catch (err) {
    res.status(400).json({ statusCode:400,message: "faild", data: err });
  }
};

module.exports = {
  register,
  login,
  userInfo
};
