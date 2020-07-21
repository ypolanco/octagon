const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Venue = new Schema(
  {
    name: { type: String, required: true },
    Address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("venues", Venue);
