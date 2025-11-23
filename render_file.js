import express from "express";
import path from "path";
const absPath = path.resolve("View");//Make absolute path till to folder
const app = express();
const publicpath = path.resolve('Public') // Path for CSS file 

// console.log(publicpath);
// app.use() adds middleware that runs for every matching request (e.g., serving static files)
app.use(express.static(publicpath)); //Make all files in publicpath folder that is Accessible.

// Home route
app.get("/", (req, resp) => {
    resp.sendFile(absPath+'/home.html'); 
});

// Login route
app.get("/login", (req, resp) => {   
    resp.sendFile(absPath+'/login.html');                          
});

// About route
app.get("/about", (req, resp) => {  
    resp.sendFile(absPath+'/about.html');                          
});

app.listen(3200);
