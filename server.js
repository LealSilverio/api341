// express web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', require('./route/lesson1'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});