const express = require("express")
const {StudentModel} = require("../configs/db")
const jwt = require("jsonwebtoken")
const {authMiddleware} = require("../Middleware/product.middleware")

const app = express()
app.use(express.json())

const productRoute = express.Router()

productRoute.post("/registration", async (req, res) => {
  try {
   
    const reva = await StudentModel.findOne({ email:req.body.email } )
    console.log("revaaaaaaaa",reva)
    if(reva){
      res.status(400).send({"msg":"user is already exists","err":err.message});
    }else{
      const temp = new StudentModel(req.body);
      await temp.save();
      res.send({ msg: "user is registered" });
    }
    
  } catch (err) {
    res.status(400).send({"msg":"user cannot registered","err":err.message});
  }
});

// mongodb+srv://revati:revati@cluster0.ac6kbta.mongodb.net/lms_data

productRoute.post("/login", async (req, res) => {
  // try {
  //   const user = await StudentModel.findOne({ email: req.body.email });
  //   if (user) {
  //     const result = req.body.password === user.password;
  //     if (result) {
  //       res.send({ msg: "user logged in" });
  //     } else {
  //       res.send({ msg: "Wrong credentials" });
  //     }
  //   }
  // } catch (err) {
  //   res.send({ msg: "error in catch block", err: err });
  // }
  const details = req.body
  try{
     const user= await StudentModel.findOne({$and:[{email:details.email},{password:details.password}]},{_id:0})
    
     if(user){
      let token = jwt.sign({user:user}, 'school');
      res.send({ "msg": "user logged in" ,"token":token})
     }else{
      res.status(404).send({"msg":"Wrong Credentials"});
      
     }
     
  }catch(err){
    console.log("error in catch",err)
    res.send({ msg: "error in catch block", err: err });
  }
});

productRoute.use(authMiddleware)

productRoute.get("/data",(req,res)=>{
  //const token =  req.query.token
  console.log("EmailID",req.body.email)
  console.log("request",req?.decodedToken)
  // const token = req.headers.authorization   // instead of passing in query we are passing in headers
  // jwt.verify(token, 'school', function(err, decoded) {
  //    if(decoded){
  //     res.send({"msg":"data....."})
  //    }else{
  //     res.send({"msg":"wrong credentials"})
  //    }
  // });

  try{
    res.send({"msg":"data.."})
  }catch(err){
    res.send({"msg":"wrong credentials","err":err})
   
  }
 
})



module.exports = {
    productRoute 
}