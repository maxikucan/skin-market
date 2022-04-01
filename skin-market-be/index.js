const express = require('express');

const app = express();


app.use('/', require('./router/routes'));
app.use('/userConnect', require('./router/routes'));

app.listen(8080, () => {
    console.log('Server running on port 8080')
})



