const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  type: String,
  price: Number,
  specs: {
    engine: String,
    fuelType: String,
    horsepower: Number,
  },
});

module.exports = mongoose.model("Car", carSchema);
