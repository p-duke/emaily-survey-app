const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
// vast majority of projects use a single app object
const app = express();

// passport.use is a generic register to be aware of new strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
        }
    )
);

// app.get creates new route handler to watch for '/'
// you can create app.<http_verb>
// authenticate google means use google strategy which is internally identified
// scope is the type of information or permissions we want to read
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// this passes the code we receive back to google
// passport will see the coede and automatically handle the code exchange
app.get('/auth/google/callback', passport.authenticate('google'));

// Heroku can pass us runtime config based on environment
// this variable wouldn't work in dev environment so short circuit
const PORT = process.env.PORT || 5000;
// telling node to listen to port 5000
app.listen(PORT);
