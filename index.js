const express = require('express');
const mongoose = require('mongoose');
// we need to tell passport to keep track of session via cookies
// cookieSession gives us access to cookies via express
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
// we don't need to assign a var to this because we just need the file to be execute
// don't need to export anything
require('./services/passport');
// connect to MongoDB db hosted instance
mongoose.connect(keys.mongooseURI);
// vast majority of projects use a single app object
const app = express();

// app.use configures the middleware to perform logic on request (e.g. cookie session, passport, deserializeUser)
// all requests go through middleware and is then passed off to the route handler
app.use(
    cookieSession({
        // how long cookie lasts for 30 days
        // 30 days 24 hours 60 min 60 sec 1000 milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// essentially made the entire authRoutes.js file a function that takes an app object
require('./routes/authRoutes')(app);
// Heroku can pass us runtime config based on environment
// this variable wouldn't work in dev environment so short circuit
const PORT = process.env.PORT || 5000;
// telling node to listen to port 5000
app.listen(PORT);
