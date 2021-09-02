const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}

console.log('Order total is: ', total);


let total2 = 0;
for (let amount of amounts) {
  total2 += amount;
}
console.log('Order total is: ', total2);





//for-of loop iterating over a string which will print the integer of every index on the array
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of data) {
  console.log(number);
}


//for-of loop iterating over a string which will print the index to console on each loop
let manName = 'johnny'

for(let letter of manName) {
    console.log(letter);
}

















