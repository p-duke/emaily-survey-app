const mongoose = require("mongoose");
const { Schema } = mongoose;

// although MongoDB is schema-less mongoose defines a schema with property and type
// we can freely add properties whenever we want in the dev process
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// this is creating the equivalent of a MongoDB users collection
// loads the schema into mongoose
mongoose.model("users", userSchema);
