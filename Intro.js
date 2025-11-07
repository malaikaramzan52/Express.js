//Express js 
//is a web application framework for Node js. It simplifies building web servers and APIs in Node.
const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send("<h1>Basic node js example</h1>");
});
app.get("/about", (req, resp) => {
    resp.send("<h1>This is about page.</h1>");
});
app.get("/contact", (req, resp) => {
    resp.send("<h1>This is Contact page.</h1>");
});
app.listen(5300);