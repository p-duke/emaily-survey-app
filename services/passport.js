const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// by passing only one argument it tells mongoose that we want to fetch something e.g. users
// with two arguments it tells mongoose that we want to set something to a record
// this grabs the model class which === MongoDB collection
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
// passport.use is a generic register to be aware of new strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            // this query returns a promise
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    // already have record with profile id
                    // call the done function params - error object and record
                    done(null, existingUser);
                } else {
                    // don't have record and create one
                    // this doesn't persist the user yet until we call .save()
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
