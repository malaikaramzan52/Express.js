import mongoose from 'mongoose'            //import mongoose 
async function dbConnection()              //it return promise 
{
    await  mongoose.connect("mongodb://localhost:27017/school")   //mongodb connection
    const schema = mongoose.Schema({
        name:String,
        email:String,
        age:Number,
    })
    const studentsModel = mongoose.model('students',schema);
    const result = await studentsModel.find();    //It also return promise         
    console.log(result);
}
dbConnection();