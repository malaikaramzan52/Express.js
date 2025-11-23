//Error Handling Middleware
//These middleware are used to handle an error that occurs in routes.

import express from'express';
const app= express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Home Page</h1>");
})
app.get("/users",(req,res)=>{
    res.send1("<h1>Welcome to the Users Page</h1>"); //Typo Error
})
app.get("/error",(req,res,next)=>{
    const error = new Error('')
    error.status=404;
    next(error);
})
function errorhandling(error,req,res,next){
    res.status(error.status || 500).send("Try after some time, we are facing some issues");
}
app.use(errorhandling);
app.listen(3200);

