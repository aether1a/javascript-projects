/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//a
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//b
for (let j = 3; j <= 29; j = j + 2) {
  console.log(j);
}

//c
for (let k = 12; k >= -14; k = k - 2) {
  console.log(k);
}

//d
for (let l = 50; l >= 20; l--) {
  if (l % 3 === 0) {
     console.log(l);
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 


let course = "LaunchCode";
let misc = [1, 5, 'LC101', 'blue', 42];
let reversed = '';
//a
for (let m = 0; m < misc.length; m++) {
  console.log(misc[m]);
}

//b
for (let n = course.length - 1; n >= 0; n--) {
  console.log(course[n]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let blocks = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let odd = [];
let even = [];

for (let o = 0; o < blocks.length; o++) {
  if (blocks[o] % 2 === 0) {
    even.push(blocks[o]);
  } else {
    odd.push(blocks[o]);
  }
}


console.log("Even numbers: ", even);
console.log("Odd numbers: ", odd);


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 





/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */