const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    time: { type: Number, required: true },
    gate: { type: String, required: true },
    section: { type: String, required: true },
    row: { type: String, required: true },
    seat: { type: String, required: true },
    ticket_number: { type: String, required: true },
    description: { type: String, required: true },
    guest: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", Event);
