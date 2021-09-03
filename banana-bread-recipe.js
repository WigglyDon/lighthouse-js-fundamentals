const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

counterInteger = 0;
while (ingredients.length > counterInteger) {
  console.log(ingredients[counterInteger]);
  counterInteger++;
}

for (index of ingredients) {
  console.log(index);
}

for (index of ingredients) {
  console.log(ingredients.reverse());
}

//this just prints the contents in reverse however many times relative to the total number of
//indexes contained inside of the array

//so i have accidently made it do what I wanted 10x, but if I do just

console.log(ingredients.reverse());

//that is technically not a loop by itself which is against the definitions of the challenge