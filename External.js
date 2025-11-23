//External Middleware
//External middleware are those middleware that are available you just need to install and use them.
import express from 'express';
import morgan from 'morgan';

const app = express();

// Use morgan middleware for logging
app.use(morgan('dev'));
//IT shows :
// HTTP method (GET, POST, etc.)
// URL (/home, /login)
// Status code (200, 404, 500, etc.)
// Time taken to respond (12ms, 8ms)

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});
app.get("/wait",(req,res)=>{
    setTimeout(()=>{
        res.send("Waited for 1 second");
    },1000);
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
