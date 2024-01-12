const jwt = require("jsonwebtoken")
const http = require("http")

const authMiddleware = (req,res,next)=>{
    //req.decodedToken = {course:"fullstack"}
    
    const token = req.headers.authorization   // instead of passing in query we are passing in headers
    try{
        jwt.verify(token, 'school', function(err, decoded) {
            if(decoded){
               req.decodedToken = decoded
               next()
            }else{
               console.log("error in token decode")
               res.sendStatus(500)
            }
         });
    }catch(err){
         res.send({"err":err})
    }
     
}  

module.exports = {
    authMiddleware 
}

