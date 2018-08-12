const express = require('express');
// vast majority of projects use a single app object
const app = express();

// app.get creates new route handler to watch for '/'
// you can create app.<http_verb>
app.get('/', (req, res) => {
    res.send({ by: 'buddy' });
});

// Heroku can pass us runtime config based on environment
// this variable wouldn't work in dev environment so short circuit
const PORT = process.env.PORT || 5000;
// telling node to listen to port 5000
app.listen(PORT);
