const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let food = 0;
while (food < ingredients.length){
  console.log(ingredients[food]);
  food++;
}

// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let j = ingredients.length - 1; j >= 0; j--){
  console.log(ingredients[j]);
}