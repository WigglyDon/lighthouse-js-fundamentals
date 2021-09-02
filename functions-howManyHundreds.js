// canada is sending juicy sauce to mars
// each box on the ship has === 100 bottles of juicy sauce
// container will only be sent if it is full (100 bottles)
// this challenge asks us to make a function to tell how many boxes
// there are going to be


function howManyHundreds(inputNumber) {
  return (inputNumber - (inputNumber % 100)) / 100;
}

