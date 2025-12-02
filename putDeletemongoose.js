import mongoose from 'mongoose'//import mongoose 
import express from 'express'
import studentModel from './Model/studentModel.js';

const app = express();
app.use(express.json());         //is a middleware extract data from body.

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
    console.log("___________connected____________");
})  //mongodb connection


//get 
app.get("/", async (req, res) => {
    const studentData = await studentModel.find()
    res.send(studentData)
})


//Post
app.post("/save", async (req, res) => {
    console.log(req.body);
    //validation to ensure all the fields must be filled
    const { name, age, email } = req.body;
    if (!req.body || !name || !age || !email){
        res.send({
            message: "Data Not Stored",
            success: false,
            storedInfo: null
        })
        return false 
    }
    const studentData = await studentModel.create(req.body)
    res.send({
        message: "Data Stored",
        success: true,
        storedInfo: studentData
    })
})


//PUT method
app.put("/update/:id",async(req,res)=>{
    
    const id = req.params.id;
    console.log(req.body,id);

    const studentData = await studentModel.findByIdAndUpdate(id,{
        ...req.body
    })
    res.send({
        message:'data updated',
        success:true,
        info:null
    })
})



// Delete Method
app.delete("/delete/:id",async(req,res)=>{
    
    const id = req.params.id;
    console.log(req.body,id);

    const studentData = await studentModel.findByIdAndDelete(id)
    res.send({
        message:'Data Deleted',
        success:true,
        info:studentData
    })
})

app.listen(3200);




