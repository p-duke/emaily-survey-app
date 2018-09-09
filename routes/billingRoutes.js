const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // you can pass in any handlers to be called on that route
  // express doesn't care how many route handlers you use as long as long as one sends a res
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // need logic to handle token and talk to stripe api with token
    // we'll also use the stripe npm module
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    // passport will automatically apply user to req
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
