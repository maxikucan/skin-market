const express = require('express');
const { Pool } = require('pg');

const router = express.Router();

const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'skin_market_db'
};

const pool = new Pool(config);

router.get('/', (req, res) =>{
    res.send('Hello World. Backend is running');
});

router.get('/getUsers', async (req, res) => {
    const response = await getUsers();
    res.send(JSON.stringify(response));
})

router.get('/getProducts', async (req, res) => {
    const response = await getProducts();
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

const getProducts = async () => {
    try {
        const res = await pool.query('SELECT * FROM products');
        console.log(res.rows);
        return res.rows;

    } catch (e) {
        console.log(e);
    }
}

module.exports = router;
