import express from 'express';
import { MongoClient } from 'mongodb';     // To connect MongoDB
import { ObjectId } from "mongodb";        // For MongoDB _id object

const dbName = "school"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const app = express();

app.set('view engine', 'ejs');             // Set EJS template engine

app.use(express.urlencoded({ extended: true })); // To read form data


client.connect().then((connection) => {
    const db = connection.db(dbName);      // Select database


    // ======================= API (Get All Students) =======================
    app.get("/api", async (req, res) => {
        const collection = db.collection("students");   // Select collection
        const students = await collection.find().toArray(); // Get all data
        res.send(students);
    });


    // ======================= UI (Show All Students) =======================
    app.get("/ui", async (req, res) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray(); // Fetch data
        res.render("students", { students: students });     // Load template
    });


    // ======================= Add Student (Form) =======================
    app.get("/add", (req, res) => {
        res.render("add-student");     // Show add student form
    });


    // ======================= Insert Student =======================
    app.post("/addstudent", async (req, res) => {
        const collection = db.collection("students");
        const result = await collection.insertOne(req.body);   // Insert data
        console.log(result);
        res.send("Data Saved");
    });


    // ======================= Delete (API Method) =======================
    app.delete("/ui/delete/:id", async (req, res) => {
        try {
            const collection = db.collection("students");

            const result = await collection.deleteOne({
                _id: new ObjectId(req.params.id)     // Match ID
            });

            if (result.deletedCount > 0) {           // If deleted
                res.send({
                    message: "Deleted Successfully",
                    success: true
                });
            } else {
                res.send({
                    message: "No Record Found",
                    success: false
                });
            }

        } catch (error) {
            res.send({
                message: "Invalid ID Format",
                success: false
            });
        }
    });


    // ======================= Delete (UI Method) =======================
    app.get("/ui/delete/:id", async (req, res) => {
        try {
            const collection = db.collection("students");

            const result = await collection.deleteOne({
                _id: new ObjectId(req.params.id)     // Match ID
            });

            if (result.deletedCount > 0) {
                res.send("<h1>Deleted Successfully</h1>");
            } else {
                res.send("<h1>Deletion Failed</h1>");
            }

        } catch (error) {
            res.send("<h1>Invalid ID Format</h1>");
        }
    });


    // ======================= Load Update Form =======================
    app.get("/ui/update/:id", async (req, res) => {
        const id = req.params.id;
        const collection = db.collection("students");
        const result = await collection.findOne({ _id: new ObjectId(id) });   // Get specific record
        res.render("update-student", { result: result });                    // Show update form
    });


    // ======================= Get Student Using API =======================
    app.get("/update/:id", async (req, res) => {
        const id = req.params.id;
        const collection = db.collection("students");
        const result = await collection.findOne({ _id: new ObjectId(id) });  // Find one record
        res.send({
            message: "Fetched Successfully",
            success: true,
            result: result
        })
    });


    // ======================= Update (UI Method - POST) =======================
    app.post("/ui/update/:id", async (req, res) => {
        const collection = db.collection("students");

        const filter = { _id: new ObjectId(req.params.id) };  // Find by ID
        const update = { $set: req.body };                    // Set new data

        const result = await collection.updateOne(filter, update); // Update record

        if (result.modifiedCount > 0) {
            res.send("Data Updated");
        } else {
            res.send("Data Not Updated");
        }
    });


    // ======================= Update (API Method - PUT) =======================
    app.put("/update/:id", async (req, res) => {
        try {
            const collection = db.collection("students");

            const filter = { _id: new ObjectId(req.params.id) }; // Find record
            const update = { $set: req.body };                   // New data

            const result = await collection.updateOne(filter, update); // Update

            if (result.modifiedCount > 0) {
                return res.send({
                    message: "Data Updated Successfully",
                    success: true,
                    result: req.body
                });
            } else {
                return res.send({
                    message: "No data updated",
                    success: false
                });
            }

        } catch (error) {
            res.send({
                message: "Update Error",
                success: false,
                error: error.message
            });
        }
    });

});

app.listen(3300);   // Start server
