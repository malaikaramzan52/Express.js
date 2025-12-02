import express from 'express'
const app= express();

app.get("/",(req,res)=>{
    res.send({
        name:"anil",
        age:29,
        email:"anil@gmail.com"
    })
})


app.listen(3300)