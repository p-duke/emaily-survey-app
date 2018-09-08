// None of these keys should ever be present on the client frontend - only backend
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongooseURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
