const raining = true;
const cold = false;
const temperature = 12;

if (temperature < -40 || temperature > 40) {
  console.log("hot/cold tamales compadre! your footsies might be gonesies...");
}else if (temperature < 0) {
  console.log("Make sure you pick out a scarfff");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}else {
  console.log("Short sleeves should be okay.");
}

if (raining) {
  console.log("Don't forget your umbrella!");
} else if (!raining) {
  console.log("umbrella not needed");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!!!!!!!!! :D");


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

