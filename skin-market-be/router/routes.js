const express = require('express');
const { Pool } = require('pg');

const router = express.Router();
let usersArr;

const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'skin_market_db'
};

router.get('/', (req, res) =>{
    res.send('Hello World. Backend is running');
});

const pool = new Pool(config);

router.get('/userConnect', async (req, res) => {
    const response = await getUsers();
    res.send(JSON.stringify(response));
})

const getUsers = async () => {
    try {
        const res = await pool.query('SELECT * FROM users');
        console.log(res.rows);
        return res.rows;

    } catch (e) {
        console.log(e);
    }
}

module.exports = router;