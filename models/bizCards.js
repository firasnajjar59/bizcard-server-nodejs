const mongoose= require("mongoose")
const Schema=mongoose.Schema

const bizCardSchema=new Schema({
    bizName:{type:String,require:true},
    bizDescription: {type:String},
    bizAddress: {type:String,require:true},
    bizPhone: {type:String,require:true},
    bizImg: {type:String},
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      }
})
const Bizcards=mongoose.model("bizcards",bizCardSchema)

const getCardsDB=()=>{
    return Bizcards.find()
}
const getCard=(userInputs)=>{
    console.log(userInputs);
    return Bizcards.find(userInputs)
}
const getCardsByIdDB=(id)=>{
    return Bizcards.findById(id)
}
const createCardDB=(userInput)=>{
    const bizcard=new Bizcards(userInput)
    return bizcard.save()
}
const updateCardDB=(id,userInput)=>{
    return Bizcards.findByIdAndUpdate(id,userInput) 
}
const deleteCardDB=(id)=>{
    return Bizcards.findByIdAndDelete(id.id) 
}

module.exports= {getCard,createCardDB,getCardsDB,updateCardDB,getCardsByIdDB,deleteCardDB}