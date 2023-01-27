const db = require("../models");

// To use await, we need an async function.
async function seed() {
  // Get the place, H-Thai-ML
  let place = await db.Recipe.findOne({ name: "Lorem Ipsum" });

  // Create a fake sample comment.
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    stars: 5.0,
    content: "Wow, simply amazing! Will make again!",
  });

  // Add that comment to the place's comment array.
  recipe.comments.push(comment.id);

  //save the place now that it has comment
  await recipe.save();

  // Exit the program
  process.exit();
}

seed();