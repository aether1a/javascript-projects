// const input = require('readline-sync');
// Initialize Variables below




let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius	= -225
let minimumFuelTemp	= -300
let maximumFuelTemp	= -150
let fuelLevel = 100
let weatherStatus = "Clear"
let preparedForLiftOff = true
let error

console.log("All systems are a go! Initiating space shuttle sequence. \n -------------------------------------------------------");
console.log("Date: " + date);
console.log("Time: " + time);

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut Count: " + astronautCount)
} else {
    error = "not ready";
}


// add logic below to verify all astronauts are ready
if (astronautStatus === "ready"){
    console.log("Crew ready"); 
} else {
     error = "not ready";
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000){
    console.log("Crew mass: " + crewMassKg + "kg");
}else {
    error = "not ready";
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if ((fuelTempCelsius >= minimumFuelTemp) && (fuelTempCelsius <= maximumFuelTemp) ){
    console.log("Fuel Temperature " + fuelTempCelsius + "C°");
}else {
    error = "not ready";
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === 100){
console.log("Fuel at 100%");
}else {
    error = "not ready";
}
// add logic below to verify the weather status is clear
if (weatherStatus === "Clear"){
console.log("Weather: " + weatherStatus);
}else {
    error = "not ready" ;
}

// Verify shuttle launch can proceed based on above conditions
if (error != "not ready"){
    console.log("Have a safe trip astronauts!");
}