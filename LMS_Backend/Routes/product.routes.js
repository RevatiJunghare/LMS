const express = require("express")
const {StudentModel} = require("../configs/db")
const {CourseModel} = require("../configs/db")
const jwt = require("jsonwebtoken")
const {authMiddleware} = require("../Middleware/product.middleware")

const app = express()
app.use(express.json())

const productRoute = express.Router()

productRoute.post("/registration", async (req, res) => {
  try {
    const reva = await StudentModel.findOne({ email:req.body.email } )
    if(reva){
      res.status(400).send({"message":"user is already exists"});
    }else{
      const temp = new StudentModel(req.body);
      await temp.save();
      res.send({ "message": "user is registered" });
    }
    
  } catch (err) {
    console.log("catch error",err)
    res.status(400).send({"message":"user cannot registered","err":err.message});
  }
});

// mongodb+srv://revati:revati@cluster0.ac6kbta.mongodb.net/lms_data

productRoute.post("/login", async (req, res) => {
  
  const details = req.body
  try{
     const user= await StudentModel.findOne({$and:[{email:details.email},{password:details.password}]},{_id:0})
    
     if(user){
      let token = jwt.sign({user:user}, 'school');
      res.send({ "message": "user logged in" ,"token":token})
     }else{
      res.status(404).send({"message":"Wrong Credentials"});
      
     }
     
  }catch(err){
    console.log("error in catch",err)
    res.status(400).send({"message":"login error"});
  }
});

productRoute.use(authMiddleware)

productRoute.get("/data",(req,res)=>{
  try{
    res.send({"message":"data.."})
  }catch(err){
    res.send({"message":"wrong credentials","err":err})
  }
})

productRoute.post("/create-course",async(req,res)=>{
   try{
    const course =  new CourseModel(req.body)
    await course.save()
    res.send({"message":"course created"})
   }catch(err){
    res.send({"message":"corse not created","err":err.message})
   }
})



module.exports = {
    productRoute 
}