//middleware examples
//Age checker middleware
import express from 'express';
const app = express();
// function ageChecker(req,res,next){
//     if(!req.query.age||req.query.age<18){
//         res.send("<h1>Access Denied</h1><p>You must be at least 18 years old to access this page.</p>");
//     }
//     else{
//         next();
//     }
// }

// app.use(ageChecker);// to apply middleware globally

// app.get("/", (req,res)=>{
//     res.send("<h1>Home Page</h1><p>Welcome to the home page!</p>");
// })

// app.get("/login", (req,res)=>{
//     res.send("<h1>Login Page</h1><p>Please enter your credentials.</p>");
// })
// app.get("/admin", (req,res)=>{
//     res.send("<h1>Admin Page</h1><p>Welcome to the admin page!</p>");
// })

// app.listen(3000);

//IP checker middleware

function ipChecker(req, res, next) {
    const ip =req.socket.remoteAddress; // to get user's IP address
    console.log("User IP:", ip);
    if (ip.includes("192.168.1.39")) {
        return res.send("<h1>Access Denied</h1><p>Your IP address is not allowed to access this page.</p>");
    } else {
        next();
    }
}

app.use(ipChecker);

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><p>Welcome to the home page!</p>");
});

app.get("/login", (req, res) => {
    res.send("<h1>Login Page</h1><p>Please enter your credentials.</p>");
});

app.get("/admin", (req, res) => {
    res.send("<h1>Admin Page</h1><p>Welcome to the admin page!</p>");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
