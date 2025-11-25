import express from 'express';
import { MongoClient } from 'mongodb';//Imports MongoClient from the mongodb library.

const dbName = "school"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const app = express();

app.set('view engine', 'ejs');
// Middleware to parse URL-encoded bodies (form data) req.body
// to get form Data
app.use(express.urlencoded({ extended: true }));

client.connect().then((connection) => {
    const db = connection.db(dbName);

    //for API
    app.get("/api", async (req, res) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        res.send(students);
    })
    //for UI
    app.get("/ui", async (req, res) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        res.render("students", { students: students });
    })
    //for form Data
    app.get("/add", (req, res) => {
        res.render("add-student");
    })
    //to send data from form data to MongoDB
    app.post("/addstudent", async (req, res) => {
        //console.log(req.body);
        const collection = db.collection("students");
        const result = await collection.insertOne(req.body);
        console.log(result);
        res.send("Data Saved");
    })
})




app.listen(3000);

//================================= Difference between insertOne and insertMany ================================//
//insertOne: This method is used to insert a single document into a MongoDB collection. 
//Example:
//db.collection.insertOne({ name: "Ali", age: 22 });

// insertMany: This method is used to insert multiple documents into a MongoDB collection in a single operation.
//Example:
//db.collection.insertMany([
//   { name: "Ali", age: 22 },
//   { name: "Ayesha", age: 20 },
//   { name: "Hamza", age: 25 }
//  ])