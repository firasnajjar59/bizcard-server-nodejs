const { decodeToken } = require("../config/jwt")

const getHeadersToken=(req,res)=>{
    if(!req.headers.auth_t)throw "you must provide token"
    return decodeToken(req.headers.auth_t)
}
module.exports={getHeadersToken}