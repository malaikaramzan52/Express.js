import mongoose from "mongoose";

const studentSchema = mongoose.Schema(                   //this function takes an object
    {
     name:String,
     age:Number,
     email:String,
    }
)
export default studentSchema;


//Define Schema
//A schema is basically a structured blueprint or design that defines how data or information is organized.
// In databases like MySQL, MongoDB, SQL Server, etc.,
// a schema defines the structure of the database, including:
// Tables
// Columns
// Data types
// Relationships
// Constraints (like primary key, foreign key)