//Express js 
//is a web application framework for Node js. It simplifies building web servers and APIs in Node.
const express = require('express'); //importing express module
const app = express();//creating an express application(web server)
//Defining routes
app.get("", (req, resp) => {
    resp.send("<h1>Basic node js example</h1>");
});
app.get("/about", (req, resp) => {
    resp.send("<h1>This is about page.</h1>");
});
app.get("/contact", (req, resp) => {
    resp.send("<h1>This is Contact page.</h1>");
});
//Starting the server
app.listen(5300);