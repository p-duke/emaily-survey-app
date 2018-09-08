const passport = require("passport");

// you can make the entire file a function and require in other files
module.exports = app => {
  // app.get creates new route handler to watch for '/'
  // you can create app.<http_verb>
  // authenticate google means use google strategy which is internally identified
  // scope is the type of information or permissions we want to read
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // this passes the code we receive back to google
  // passport will see the coede and automatically handle the code exchange
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
