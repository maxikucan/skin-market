const express = require('express');
const { Pool } = require('pg');
const app = express();

const config = {
    user: 'postgress',
    host: 'localhost',
    password: '',
    database: 'library'
};

const pool = new Pool(config);

app.get('/', (req, res) =>{
    res.send('Hello World, backend is running');
})

app.listen(8080, () =>{ 
    console.log('Server running on port 3000')
})