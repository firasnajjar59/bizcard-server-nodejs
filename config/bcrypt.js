const bcrypt=require("bcryptjs")

const genPassword=(password)=>bcrypt.hash(password,10)


const comparePassword=(password,hash)=>bcrypt.compare(password,hash)

module.exports={
    genPassword,
    comparePassword
}