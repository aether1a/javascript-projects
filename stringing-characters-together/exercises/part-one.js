let num = 1001;

//Returns 'undefined'.
// console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
if (typeof num === 'number') {
    let numStr = num.toString();
    console.log(numStr.length);
}
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 'gfd';
if (typeof num2 === 'number'){
    let numStr2 = num2.toString();
    if (numStr2.includes('.')){
        let removeDecimal = numStr2.replace('.', '');
        console.log(removeDecimal.length);
    
} else{
    console.log(numStr2.length)
}
} else{
    console.log("Please input a number");
}

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.


