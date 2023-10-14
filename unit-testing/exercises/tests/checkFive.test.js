const test = require('../checkFive.js');

describe("checkFive", function(){

    test("should produces the correct output when passed a number less than 5.", function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
     });

 });