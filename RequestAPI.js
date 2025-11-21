import express from 'express';
import {MongoClient} from 'mongodb';//Imports MongoClient from the mongodb library.

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const app= express();
app.use(express.urlencoded({extended:true}));// Middleware to parse URL-encoded bodies (form data) req.body
app.use(express.json());// Middleware to parse JSON bodies
app.set('view engine','ejs');

let db;
client.connect().then((connection)=>{
     db = connection.db(dbName); 
})
//for API
app.get("/api",async (req,res)=>{
 const collection = db.collection("students");
 const students = await collection.find().toArray();
 res.send(students);
})
// for UI
app.get("/ui",async (req,res)=>{
 const collection = db.collection("students");
 const students = await collection.find().toArray();
 res.render("students",{students:students});
})
//for form Data
app.get("/add",(req,res)=>{
    res.render("add-student");
})
//to send data from form data to MongoDB
app.post("/addstudent",async (req,res)=>{
    //console.log(req.body);
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    console.log(result);
    res.send("Data Saved");
});


//to send data from API to MongoDB
app.post("/add-students-api",async(req,res)=>{
    console.log(req.body);
    const{name,age,email}= req.body;
    if(!name || !age || !email){
        res.send({message:"operation failed",success:false});
        return false;
    }
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    res.send({message:"operation successful",success:true});
    
})

app.listen(3400);