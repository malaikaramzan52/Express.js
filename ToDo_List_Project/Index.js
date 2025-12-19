import express from "express";
import path from "path";
import { MongoClient } from "mongodb";

const app = express();

//Resolve Path for CSS file
const publicPath = path.resolve("./public");
app.use(express.static(publicPath));
//To tell Express.js to use EJS as the templating engine
app.set("view engine", "ejs");

//Database Setup

const dbName = "ToDo-Task";
const collectionName = "todo-list";
const url = "mongodb://localhost:27017";
const Client = new MongoClient(url);

const connection = async () => {
  const connect = await Client.connect();
  return connect.db(dbName).collection(collectionName);
};

//global middlewares
app.use(express.urlencoded({ extended: false }));

//Make Routes
app.get("/", (req, res) => {
  res.render("list");
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.get("/update", (req, res) => {
  res.render("update");
});
app.get("/update", (req, res) => {
  res.redirect("/");
});
app.get("/add", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(req.body);
  if (result) {
    res.redirect("/");
  } else {
    res.redirect("/add");
  }
});

app.listen(8080);
