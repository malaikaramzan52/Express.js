//Template Engine
//Create dynamic webpages by merging HTML temmplates with data from the server.


//Top popular template engines
//1.EJS(Embedded JavaScript)
//2.Pug(formerly jade)
//3.Handlebars

import express from 'express';
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('home', { name: "John Doe", age: 30, city: "New York" });
});

app.listen(5200);
