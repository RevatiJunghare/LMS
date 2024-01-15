const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://revati:revati@cluster0.ac6kbta.mongodb.net/LearningManagementSystem?retryWrites=true&w=majority")
//const connection = mongoose.connect(process.env.mongoURL)

const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    
},{
    
    versionKey:false,
})

const StudentModel = mongoose.model("user",studentSchema)

const courseSchema = mongoose.Schema({
    title:{type:String,required:true},
    subtitle:{type:String,required:true},
    description:{type:String,required:true},
    image: {type: String,required: true}
})

const CourseModel = mongoose.model("createcourse",courseSchema)

module.exports = {
    connection ,
    StudentModel,
    CourseModel
}

