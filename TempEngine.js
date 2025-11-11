// Template Engine that display data from HTML form
import express from 'express';
const app = express();

app.set("view engine", "ejs");

app.get('/add-user', (req, res) => {
    res.render('addUser');
});

app.post('/submit-user', (req, res) => {
    res.render('SubmitUser',req.body);
});
app.listen(3200);