import mongoose from 'mongoose'//import mongoose 
import express from 'express'   
import studentModel from './Model/studentModel.js';

const app = express();

await  mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("___________connected____________");
})  //mongodb connection



app.get("/",async(req,res)=>{
    const studentData = await studentModel.find()
    res.send(studentData)
})
app.listen(3200);

// async function dbConnection()              //it return promise 
// {
//     await  mongoose.connect("mongodb://localhost:27017/school")   //mongodb connection
//     const schema = mongoose.Schema({
//         name:String,
//         email:String,
//         age:Number,
//     })
//     const studentsModel = mongoose.model('students',schema);
//     const result = await studentsModel.find();    //It also return promise         
//     console.log(result);
// }
// dbConnection();

