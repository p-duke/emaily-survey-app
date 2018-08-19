const express = require('express');
// we don't need to assign a var to this because we just need the file to be execute
// don't need to export anything
require('./services/passport');
// vast majority of projects use a single app object
const app = express();
// essentially made the entire authRoutes.js file a function that takes an app object
require('./routes/authRoutes')(app);
// Heroku can pass us runtime config based on environment
// this variable wouldn't work in dev environment so short circuit
const PORT = process.env.PORT || 5000;
// telling node to listen to port 5000
app.listen(PORT);
