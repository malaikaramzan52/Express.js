//render HTML Elements 
import express from 'express'
import submit from './pages/submit.js';
import login from './pages/login.js';
import home from './pages/home.js';
const app = express();

app.get("/", (req, res) => {
    res.send(home());
});
app.get("/login",(req,res)=>{
     res.send(login());
})
app.post("/submit",(req,res)=>{
     res.send(submit());
})
app.listen(3200);
