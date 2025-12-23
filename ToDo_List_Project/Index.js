import express from "express";
import path from "path";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

// Resolve Path for CSS file
const publicPath = path.resolve("./public");
app.use(express.static(publicPath));

// Set EJS as templating engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Database Setup
const dbName = "ToDo-Task";
const collectionName = "todo-list";
const url = "mongodb://localhost:27017";
const Client = new MongoClient(url);

const connection = async () => {
  const connect = await Client.connect();
  return connect.db(dbName).collection(collectionName);
};

// Routes
app.get("/", async(req, res) => {
  // const db = await connection();
  const collection = await connection();
  const result = await collection.find().toArray();
  res.render("list",{result});
});

app.get("/add", (req, res) => {
  res.render("add");
});

// Changed to POST so req.body works
app.post("/add", async (req, res) => {
  const collection = await connection();
  const result = await collection.insertOne(req.body);
  if (result) {
    res.redirect("/");
  } else {
    res.redirect("/add");
  }
});


//Delete Route
app.get("/delete/:id", async (req, res) => {
  const collection = await connection();
  const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
  if (result) {
    res.redirect("/");
  } else {
    res.redirect("/Some Error");
  }
});

//Populate Data for Update Task
app.get("/update/:id",async (req, res) => {
  const collection = await connection();
  const result = await collection.findOne({ _id: new ObjectId(req.params.id) });
   if(result){
    res.render("update",{task: result});
   }
   else{
    res.send("Some Error");
   }
});
// Update Task
app.post("/update/:id",async (req, res) => {
  const collection = await connection();
  const filter = { _id: new ObjectId(req.params.id) };
  const updatedData = {$set:{title: req.body.title, description: req.body.description}};
  const result = await collection.updateOne(filter, updatedData);
   if(result){
    res.redirect("/");
   }
   else{
    res.send("Some Error");
   }
});

// Multi-Delete Route

app.post("/multi-delete",async (req, res) => {
  const collection = await connection();
  let selectedTask=[];
  if(Array.isArray(req.body.selectedTask)){
    selectedTask =req.body.selectedTask.map((id)=> new ObjectId(id));
  }
  else{
     selectedTask =[new ObjectId(req.body.selectedTask)];
  }
  const result = await collection.deleteMany({ _id: { $in: selectedTask } });
   if(result){
    res.redirect("/");
   }
   else{
    res.send("Some Error");
   }
});


// Removed duplicate /update GET route that redirected

// Start server
app.listen(8080);
