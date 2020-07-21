const db = require("../db");
const Post = require("../models/venue");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const venue = [
    {
      name: "City Field",
      Address: "123-01 Roosevelt Ave",
      city: "Flushing",
      state: "New York",
      zip: 11368
    },
  ];

  await Post.insertMany(venue);
  console.log("Post Created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
