"use strict";

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) 
{
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
    
    let cycle = 0;
    while (cycle < 2) {
      const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
      console.log("The traffic light is on", currentState);
      if (currentState === "green") {
        trafficLight.stateIndex++;
      } else if (currentState === "orange") {
        trafficLight.stateIndex++;
      } else {
        trafficLight.stateIndex -= 2;
        cycle++;
      }
}
