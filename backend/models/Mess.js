const mongoose = require("mongoose");

const messSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  rating: Number
});

module.exports = mongoose.model("Mess", messSchema);
