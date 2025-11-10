//External Middleware
//External middleware are those middleware that are available you just need to install and use them.
import express from 'express';
import morgan from 'morgan';

const app = express();

// Use morgan middleware for logging
app.use(morgan('dev'));

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

app.listen(8088, () => {
    console.log("Server running on http://localhost:8088");
});
