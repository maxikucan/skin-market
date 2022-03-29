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

app.use('/', require('./router/routes'));

app.listen(8080, () =>{ 
    console.log('Server running on port 8080')
})