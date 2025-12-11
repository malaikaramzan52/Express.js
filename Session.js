import session from "express-session";
import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(
  session({
    secret: "apple",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  req.session.data = req.body;  // save session
  res.render("profile");
});

app.get("/", (req, res) => {

  const data = req.session.data; 
  console.log(data);  
  res.render("home", { data: data });
 
});


app.listen(3300);
