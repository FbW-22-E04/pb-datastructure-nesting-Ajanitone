// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (const value of board) {
  for (const item of value) {
    console.log("Q1", item);
  }
}

console.log(
  "-----------------------------------------------------------------"
);

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

const doggo = {
  name: "Falco",
  breed: "German Sheperd",
  favoriteFoods: ["fish", "chicken"],

  valueCount() {
    for (const value of doggo.favoriteFoods) {
      console.log("Q2.4:", value);
    }
  },
};

console.log("Q2.3:", doggo.favoriteFoods[1]);

doggo.valueCount();

console.log(
  "-----------------------------------------------------------------"
);
// #### 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
// * 3.4 Change the ingredient `sugar` to `brown sugar`.
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

const recipe = {
  ingredients: {
    butter: "200g",
    sugar: "200g",
    flour: "200g",
  },
  valueOf() {
    return Object.values(recipe.ingredients);
  },
};
recipe.ingredients.ginger = "20g";

console.log("Q3.3:Added ginger to recipe", recipe);
console.log(
  "-----------------------------------------------------------------"
);
// * 3.4 Change the ingredient `sugar` to `brown sugar`.

let brownSugar = "200g";

delete recipe.ingredients.sugar;
recipe.ingredients.brownSugar = brownSugar;

console.log(recipe);
console.log("-------------------------------");

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

recipe.valueOf();

console.log("Q3.4:The values of the ingredients are:", recipe.valueOf());
