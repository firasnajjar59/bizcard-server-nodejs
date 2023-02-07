// card joi validation functions
const {
  validateNewCard,
  validateCardToUpdate,
  validateIdSchema,
} = require("../../validation/cardValidate/validateFunctions");
// mongoose functions
const {
  createCardDB,
  getCardsDB,
  updateCardDB,
  getCardsByIdDB,
  deleteCardDB,
  getCard
} = require("../../models/bizCards");
const {
  userInfoDb
} = require("../../models/user");
// global functions to controllers
const {getHeadersToken}=require("../globalControllersFunc")

// *controller
// !get all cards
const allcards = async (req, res) => {
  try {
    const data = await getCardsDB();
    res.json({ message: "success", data: data });
  } catch (err) {
    res.status(404).json({ statusCode:404,status:"faild",message:"Cards not found" });
  }
};
// !get one card
const cardById = async (req, res) => {
  try {
    const validatedData = await validateIdSchema({ id: req.params.id });
    const data = await getCardsByIdDB(validatedData.id);
    res.json({ message: "success", data: data });
  } catch (err) {
    res.status(400).json({ statusCode:400,status:"faild",message:err });
  }
};
// !create card
const newCard = async (req, res) => {
  try {
    const user=await getHeadersToken(req)
    const mongouser= await userInfoDb({email:user.email})
    if (!mongouser) throw "provide a valid token"
    if (!mongouser.isBiz) throw "User cannot create card. Please login with business account"
    const validatedData = await validateNewCard(req.body);
    validatedData.user_id=mongouser._id
    const postData = await createCardDB(validatedData);
    res.status(201).json({ statusCode:201 ,status:"success",message: "Card created", data: postData });
  } catch (err) {
    res.status(400).json({ statusCode:400,status:"faild",message:err });
  }
};
// !update card
const updateCard = async (req, res) => {
  try {
    const user=await getHeadersToken(req)
    const mongouser= await userInfoDb({email:user.email})
    if (!mongouser) throw "provide a valid token"
    const validatedCardId = await validateIdSchema({ id: req.params.id });
    const validatedData = await validateCardToUpdate(req.body);
    const cardBeforeUpdate= await getCardsByIdDB(validatedCardId.id)
    if(!cardBeforeUpdate.user_id.equals(mongouser._id))throw "user cannot update this card!!!"
    validatedData.user_id=mongouser._id
    const data = await updateCardDB(validatedCardId.id, validatedData);
    res.json({ message: "Card updated", data: data });
  } catch (err) {
    res.status(400).json({ statusCode:400,status:"faild",message:err });
  }
};
// !delete card
const deleteCard = async (req, res) => {
  try {
    const user=await getHeadersToken(req)
    const mongouser= await userInfoDb({email:user.email})
    if (!mongouser) throw "provide a valid token"
    const validatedCardId = await validateIdSchema({ id: req.params.id });
    const cardBeforeDelete= await getCardsByIdDB(validatedCardId.id)
    if(!cardBeforeDelete)throw "No card found. please provid a valid id"
    if(!cardBeforeDelete.user_id.equals(mongouser._id))throw "user cannot update this card!!!"
    const data = await deleteCardDB(validatedCardId);
    res.json({ message: "Card deleted", data: data });
  } catch (err) {
    res.status(400).json({ statusCode:400,status:"faild",message:err });
  }
};
const get=async(req,res)=>{
  try{
    console.log(req.body);
    const bizCardData=await getCard(req.body)
    res.json(bizCardData)
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  newCard,
  allcards,
  updateCard,
  cardById,
  deleteCard,
  get
};
