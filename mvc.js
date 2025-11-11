import express from 'express';
const app = express();
import {handleUsers} from './Controllers/userController.js';
app.set('view engine','ejs');
app.get('/users',handleUsers);
app.listen(3400);