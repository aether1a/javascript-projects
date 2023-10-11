const input = require('readline-sync');
let selectCabinet = input.question('Select a Cabinet (0-3): ')
let selectItem = input.question('Select an Item: ')

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
let equipmentArray =  equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray =  sleepAids.split(",").sort();
// console.log(foodArray)
// console.log(equipmentArray)
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.


let cargoHold = {
  0: foodArray,
  1: equipmentArray,
  2: petsArray,
  3: sleepAidsArray
}
// console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectCabinet >= 0 && selectCabinet <=3) {
    console.log(`You have selected ${cargoHold[selectCabinet]}`);
} else{
    console.log(`Please select an option from 0-3`)
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (cargoHold[selectCabinet].includes(selectItem)) {
    console.log(`Cabinet ${selectCabinet} CONTAINS ${selectItem}.`);
  } else {
    console.log(`Cabinet ${selectCabinet} DOES NOT CONTAIN ${selectItem}.`);
  }