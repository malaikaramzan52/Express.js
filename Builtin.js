//Built-in Middleware
//Builtin middleware functions are functions that are included with the framework by default. 
//They provide common functionality that can be used in web applications without the need to install additional packages.

import express from 'express';
import path from 'path';
const app = express();

//built-in middleware to access request body
app.use(express.urlencoded({extended:false})); //to parse form data
app.use(express.static('Public')); //to serve static files like css,js,image from public folder

app.get("/home",(req,res)=>{
    const filePath = path.resolve('View/home.html');
    res.sendFile(filePath);
})


app.get("/login",(req,res)=>{
    res.send(`<form action="/submit" method="post">
        <input type="text" placeholder="Name" name="name"/>
        <input type="password" placeholder="Password" name="password"/>
        <button type="submit">Login</button>
    </form>`);
})

app.post("/submit",(req,res)=>{
    console.log("User Login details are:",req.body);
    res.send("<h1>Login Successful</h1>");
})


app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
})
app.listen(3200);