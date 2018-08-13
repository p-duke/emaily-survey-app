const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// vast majority of projects use a single app object
const app = express();
// passport.use is a generic register to be aware of new strategy
passport.use(new GoogleStrategy(() => {}));

// app.get creates new route handler to watch for '/'
// you can create app.<http_verb>

// Heroku can pass us runtime config based on environment
// this variable wouldn't work in dev environment so short circuit
const PORT = process.env.PORT || 5000;
// telling node to listen to port 5000
app.listen(PORT);
