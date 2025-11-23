
// Loops and conditions in EJS template Engine
import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
    const users = ['Alice', 'Bob', 'Charlie', 'David'];
    const ages = [25, 30, 35, 40];
    const persons = [
        { name: 'Eve', age: 28 },
        { name: 'Frank', age: 33 },
        { name: 'Grace', age: 29 }
    ];

    res.render('users', { users: users, ages: ages, persons: persons });
});

app.listen(3300);
