import express from 'express';
import {MongoClient} from 'mongodb';//Imports MongoClient from the mongodb library.

const dbName = "school"
const  url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const app = express();
app.set('view engine','ejs');
client.connect().then((connection)=>{
      const db =connection.db(dbName);
      app.get("/api",async (req,res)=>{
        const collection = db.collection("students");
        const students = await collection.find().toArray();
       res.send(students);
      })
     app.get("/ui",async (req,res)=>{
        const collection = db.collection("students");
        const students = await collection.find().toArray();
       res.render("students",{students:students});
      })
})
// app.set('view engine','ejs');



app.listen(3000);
