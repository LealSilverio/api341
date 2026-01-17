// express web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./db/connection');

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./route/lesson1'))
    .use('/contacts', require('./route/contacts'))
;

// Connect to the MongoDB server
db.initDB((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }
});