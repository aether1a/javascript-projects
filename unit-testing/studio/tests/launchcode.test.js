// launchcode.test.js code:
const launchcode = require('../index.js');

describe ("Testing launchcode", function(){

    // Write your unit tests here!
test("testing launchcode", function(){``
  expect(launchcode.organization).toBe("nonprofit");
});
test("checks Executive Director", function(){
  expect(launchcode.executiveDirector).toBe("Jeff");
});
test("checks Coolnes percentage", function(){
  expect(launchcode.percentageCoolEmployees).toBe(100);
});
test("checks programs", function(){
  expect(launchcode.programsOffered).toContain("Web Development");
  expect(launchcode.programsOffered).toContain("Data Analysis");
  expect(launchcode.programsOffered).toContain("Liftoff");
  expect(launchcode.programsOffered.length).toBe(3);
})
});

let expectedOutput = {
  1: "That doesn't work.!",
  2: "Launch!",
  3: "Code!",
  5: "Rocks!",
  6: "LaunchCode!",
  10: "Launch Rocks! (CRASH!!!)",
  15: "Code Rocks!",
  30: "LaunchCode Rocks!"
};

test("checks that the launchOutput function returns the correct strings", function() {
  for (let i in expectedOutput) {
    expect(launchcode.launchOutput(i)).toEqual(expectedOutput[i]); 
  }
});
