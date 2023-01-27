const db = require("./models");

db.Recipe.create([
  {
    recipe: "Lorem Ipsum",
    pic: "/images/h-thai-ml-tables.jpg",
    cuisines: "Lorem Ipsum",
    prepMethod: "Lorem Ipsum",
    preparation: "Lorem Ipsum",
    serves: 8,
  },
  {
    recipe: "Lorem Ipsum",
    pic: "/images/h-thai-ml-tables.jpg",
    cuisines: "Lorem Ipsum",
    prepMethod: "Lorem Ipsum",
    preparation: "Lorem Ipsum",
    serves: 8,
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });