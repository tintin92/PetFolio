const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petProfileSchema = new Schema({

  name: { type: String, trim: true },
  age: { type: Number, },
  species: { type: String, trim: true },
  breed: { type: String },
  weight: { type: Number },
  location: { type: String, trim: true },
  microchip: { type: Number, unique: true },
});

const Pets = mongoose.model("Pets", petProfileSchema)
module.exports = Pets
