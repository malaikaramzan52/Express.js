//How Express js worked explained 
const express = require('express');
const app = express();

app.listen(5200);
app.get("",(req,resp)=>{
    resp.send("<h1>Home Page</h1>");
})

app.get("/about",(req,resp)=>{
    resp.send("<h1>About Page</h1>");
})

app.get("",(req,resp)=>{
    resp.send("<h1>Home Page 2</h1>");
})
//2 parameters 
//1st is Path
//2nd is a callback function(req,resp)