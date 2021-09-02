
const moves = ['north', 'north'];

//calculates position of parade based on an array of directional moves
function finalPosition(moves) {
  let finalPosition = [];
  let finalX = 0;
  let finalY = 0;
  for (let move of moves) {
    if (move === 'north') {
      finalY += 1;
    }else if(move === 'south') {
      finalY -= 1;
    }else if(move === 'west') {
      finalX -= 1;
    }else if(move === 'east') {
      finalX += 1;
    }

  } finalPosition.push(finalX, finalY);
  return finalPosition;
  
}

console.log(finalPosition(moves));
