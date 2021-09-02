const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(inputStations) {
  let chosenStations = [];
  for (let stationsIndex of inputStations) {
    const stationName = stationsIndex[0];
    const buildingCapacity = stationsIndex[1];
    const buildingType = stationsIndex[2];
    if (buildingCapacity >= 20) {
      if (buildingType === 'school' || buildingType === 'community centre') {
        chosenStations.push(stationName);
        console.log(stationName + " has been added to the list of approved destinations...")

      }
    }

  }return chosenStations;
}

console.log(chooseStations(stations));
