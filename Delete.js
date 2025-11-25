import express from 'express';
import { MongoClient} from 'mongodb';//Imports MongoClient from the mongodb library.
import { ObjectId } from "mongodb";

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


app.delete("/ui/delete/:id", async (req, res) => {
    try {
        const collection = db.collection("students");

        const result = await collection.deleteOne({
            _id: new ObjectId(req.params.id)
        });

        if (result.deletedCount > 0) {
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
app.get("/ui/delete/:id", async (req, res) => {
    try {
        const collection = db.collection("students");

        const result = await collection.deleteOne({
            _id: new ObjectId(req.params.id)
        });

        if (result.deletedCount > 0) {
            res.send("<h1>Deleted Successfully</h1>");
        } else {
            res.send("<h1>Deletion Failed (Record Not Found)</h1>");
        }

    } catch (error) {
        res.send("<h1>Invalid ID Format</h1>");
    }
});
});




app.listen(3200);
