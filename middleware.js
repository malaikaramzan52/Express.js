//What is Middleware
//Middleware in Express.js is a function that runs before the final route handler

//Syntax
//function middleware(req,res,next){
//Do something with req or res
//next();  Pass control to the next middleware or route
//}

import express from 'express'
const app=express();
// This is a middleware function that logs the requested URL
// function checkRoute(req,res,next){
//     console.log("User is accessing:" + req.url +" Page");
//     next();
// }
app.use((req,res,next)=>{
    console.log("User is accessing:" + req.url +" Page");
    next();
});// Applying middleware to all routes using app.use()  and arrow function 

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1><p>Welcome to the home page!</p>");
})
app.get("/users",(req,res)=>{
    res.send("<h1>Users Page</h1><p>Welcome to the users page!</p>");
})
app.get("/products",(req,res)=>{
    res.send("<h1>Products Page</h1><p>Welcome to the products page!</p>");
})
app.listen(3200);

//Advantages
//1.Mdifies request
//2.Centralized logic
//3.Autthentication
//4.Third-party support
//5.Static file handling
//6.404 page handling
