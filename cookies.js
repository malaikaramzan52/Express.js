//Cookies
//Cookies are small piece of data that a server sends to the client(browser).
//Which the browser stores and sends back to the server with each subsequent request.

import express from 'express'
const app = express();

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))
app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/profile",(req,res)=>{
    res.setHeader('Set-Cookie',"login=true");
    res.setHeader('Set-Cookie',"name="+req.body.name);
   res.render("profile")
})

app.get("/home",(req,res)=>{
    let cookiesData = req.get('Cookie');
    cookiesData = cookiesData.split("; ");
    cookiesData = cookiesData[1].split("=");
    console.log(cookiesData[1])
   res.render("home",{name:cookiesData[1]})
})

app.listen(3300);