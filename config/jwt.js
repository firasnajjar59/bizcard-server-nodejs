const jwt=require("jsonwebtoken")

const genToket=(payload,expDate="30d")=>new Promise((resolve,reject)=>{
    jwt.sign(payload,"jahsdkjgfdsnjnsa",{expiresIn:expDate},(err,token)=>{
        if(err)reject(err)
        else resolve(token)
    })
})

const decodeToken=(token)=>new Promise((resolve,reject)=>{
    jwt.verify(token,"jahsdkjgfdsnjnsa",(err,payload)=>{
        if(err)reject(err)
        else resolve(payload)
    })
})
module.exports={
    genToket,decodeToken
}