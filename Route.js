//Route Middleware
import express from 'express';
const app = express();

function checkAge(req,res,next){ 
    console.log(req.query.age);
    if(!req.query.age || req.query.age < 18){
        res.send('<h1>You are not allowed to access this page</h1>');
    }
    else{
        next();
    }
}
function checkURLmiddleware(req,res,next){
    console.log("This request URL is: " + req.url);
    next();
}

app.get('/home',checkURLmiddleware, (req, res) => {
    res.send('<h1>Home Page</h1>');
})
app.get("/login",checkAge, (req,res)=>{
    res.send('<h1>Login Page</h1>');
})
app.get('/dashboard', checkAge, (req, res) => {
    res.send('<h1>Welcome to the Dashboard</h1>');
})
app.listen(3200);