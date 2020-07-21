const db = require("../db");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const post = [
    {
      name: "John Doe",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      content: "SAMPLE !@#IFJISW OADMAIOSMDOASMDK",
      title: "Unknown 76",
    },
    {
      name: "Julio Pizza Shop",
      imgURL:
        "https://images.unsplash.com/photo-1573521193836-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      content: "SAMPLE !@#IFJISW OADMAIOSMDOASMDK",
      title: "Pizza Uno",
    },
  ];

  await Post.insertMany(post);
  console.log("Post Created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
