//initial database for each station represented with nested arrays
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//instantiating a new array to store stations fitting criteria
let chosenStations = [];

//function which iterates the criteria of the challenge over each
//index of the parameter using a for-of loop
function chooseStations(inputStations) {
  //for-of loop going over each index of the inputted parameter (made specifically for the nested arrays at the top)
  for (let stationsIndex of inputStations) {

    //instantiating variables that exist only within the function for the purposes 
    //of storing each index of each array nested within the stations array (remembers name, pop, type)
    const stationName = stationsIndex[0];
    const buildingCapacity = stationsIndex[1];
    const buildingType = stationsIndex[2];

    //checks challenge criteria
    if (buildingCapacity >= 20) {
      if (buildingType === 'school' || buildingType === 'community centre') {
        
        //uses .push() to add the name of the station to the initially empty
        //storage array we called chosenStations
        chosenStations.push(stationName);

        //lets us know when a station matches the criteria during the loop
        console.log(stationName + " has been added to the list of approved destinations...")

      }
    }

  }
}


//calling the method on the list of nested arrays
//this is generating the list of chosenStations which match the criteria
//by checking the input against parameters established inside of
//chooseStations()
chooseStations(stations);

//prints the finished list to the console
console.log(chosenStations);
