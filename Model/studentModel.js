import mongoose from 'mongoose';
import studentSchema from '../Schema/studentSchema.js';


const studentModel  = mongoose.model("students",studentSchema)         //It takes two parameters collection name , schema means Datastructure.
export default studentModel


//What is model..?
//Model is logical unit where we connect schema and mongodb 