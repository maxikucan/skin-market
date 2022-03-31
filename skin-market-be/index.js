const express = require('express');
const { Pool } = require('pg');
const app = express();
let usersArr = [];

app.use('/', require('./router/routes'));

app.listen(8080, () => {
    console.log('Server running on port 8080')
})

const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'skin_market_db'
};

const pool = new Pool(config);

app.get('/userConnect', (req, res) => {
    getUsers();
    res.send(JSON.stringify(usersArr));
})

const getUsers = async () => {
    try {
        const res = await pool.query('SELECT * FROM users');
        console.log(res.rows);
        usersArr.push(res.rows);
    } catch (e) {
        console.log(e);
    }
}

