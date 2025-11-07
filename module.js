// const express = require('express');

import express from 'express'; 
import home, { contact } from './pages/home.js';
import about from './pages/about.js';

const app = express();

app.get("/", (req, res) => {
    res.send(home()); 
});
app.get("/about", (req, res) => {
    res.send(about()); 
});
app.get("/contact", (req, res) => {
    res.send(contact());
});

app.listen(5000);
