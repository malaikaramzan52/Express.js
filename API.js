//API Example with dynamic Routes
import express from 'express';
import userData from './user.json' with {type:'json'}
const app=express();

app.get("/",(req,res)=>{
    console.log(userData);
    res.send(userData);
    // res.send("user List api");
})

app.get("/user/:id",(req,res)=>{
//for id 
    // const id=req.params.id;
    // console.log(id);
    // res.send(id);
    // let filterData = userData.filter((user)=> user.id == id);
    // res.send(filterData);
//for name 
    const name = req.params.name;
    console.log(name);
    let filterData=userData.filter((user)=> user.username == name);
    res.send(filterData);



})


app.listen(3000);
