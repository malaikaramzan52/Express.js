import express from 'express';
import {MongoClient} from 'mongodb';//Imports MongoClient from the mongodb library.

const dbName="school"

// This is your MongoDB connection URL.
// localhost:27017 means MongoDB is running on your own computer.

const url ="mongodb://localhost:27017"

// Creates a new MongoDB client object using your connection URL.
// This client will be used to connect to MongoDB.

const client = new MongoClient(url);

// Creates an async function because connecting to MongoDB and reading data takes time (asynchronous).

async function dbConnection(){
    //client.connect(); returns a promise
    // Connects your Node.js application to MongoDB.
    // This line waits until the connection is completed.
      await client.connect()
      //select database name
      const db = client.db(dbName);
      //select collection named 'students' from the 'school' database
      const collection = db.collection('students')
      //collection.find() return a promise
      const result =await collection.find().toArray();
      console.log(result);
}
dbConnection();
const app = express();
app.listen(3000);