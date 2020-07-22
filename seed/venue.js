const db = require("../db");
const Venue = require("../models/venue");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const venue = [
    {
      name: "City Field",
      Address: "123-01 Roosevelt Ave",
      city: "Flushing",
      state: "New York",
      zip: 11368,
    },
  ];

  await Venue.insertMany(venue);
  console.log("Venue Created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
