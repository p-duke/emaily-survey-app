const express = require("express");
const mongoose = require("mongoose");
// we need to tell passport to keep track of session via cookies
// cookieSession gives us access to cookies via express
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");
// we don't need to assign a var to this because we just need the file to be execute
// don't need to export anything
require("./services/passport");
// connect to MongoDB db hosted instance
mongoose.connect(keys.mongooseURI);
// vast majority of projects use a single app object
const app = express();

// this will automatically parse request and apply to req.body
app.use(bodyParser.json());
// app.use configures the middleware to perform logic on request (e.g. cookie session, passport, deserializeUser)
// all requests go through middleware and is then passed off to the route handler
// if you want to wire up any middleware in express you need to use the app.use call
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
require("./routes/authRoutes")(app);
// these require statments will just return a function since we module.exports
// and then we just call app with that function - pretty cool!
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // express will serve up our production assets
  // like our main.js file, or main.css file
  // if we don't recognize a route first thing to do is check this folder
  app.use(express.static("client/build"));
  // express will serve p the index.html files
  // if it doens't recognize the route
  // this is the last catch all that will render the index with react routes
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Heroku can pass us runtime config based on environment
// this variable wouldn't work in dev environment so short circuit
const PORT = process.env.PORT || 5000;
// telling node to listen to port 5000
app.listen(PORT);
