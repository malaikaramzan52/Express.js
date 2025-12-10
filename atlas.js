import { MongoClient } from "mongodb";

const url ="mongodb+srv://malaikaramzan52_db_user:MongodbTest@cluster0.9o2q4sg.mongodb.net/?appName=Cluster0";
const database = "school";
const collection = "student";

const client = new MongoClient(url);

async function dbConnection() {
    
        await client.connect();
        console.log("Connected to MongoDB...");
        
        const db = client.db(database);
        const collectResult = db.collection(collection);
        const result = await collectResult.find().toArray();
        
        console.log(result);
}

dbConnection();
