const { start } = require("repl");

function makeLine(size) {
let line = '';
for (let i = 0; i < size; i++) {
    line += '#';
}
return line;
}
console.log(makeLine(5));


function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
      let row = makeLine(size);
      square += row;
      if (i < size - 1) {
        square += '\n';
      }
    }
    return square;
  }
  
  console.log(makeSquare(5));


function makeRectangle(width, height) {
let rectangle = '';
for (let i = 0; i < height; i++) {
    let row = makeLine(width);
    rectangle += row;
    if (i < height -1) {
        rectangle += '\n';
    }
}
return rectangle;
}
console.log(makeRectangle(5, 3));


function makeDownwardStairs(height) {
    let stair = '';
    for (let i = 0; i < height; i++ ) {
        stair += (makeLine(i+1));
    
    if (i < height - 1) {
        stair += '\n';
    }
}
    return stair;
}
console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
    let floatingLine = '';

    for (let i = 0; i < numSpaces; i++) {
        floatingLine += ' ';
    }
    for (let j = 0; j < numChars; j++) {
        floatingLine += '#';
    }
    for (let k = 0; k < numSpaces; k++) {
        floatingLine += ' ';
    }
    return floatingLine;
}
console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1));
    
    if (i < height -1 ) {
        triangle += '\n'
    }
}
    return triangle;
  }
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
      diamond += makeSpaceLine(height - i - 1, 2 * i + 1);
      if (i < height - 1) {
        diamond += '\n';
      }
    }
    for (let i = height - 2; i >= 0; i--) {
      diamond += makeSpaceLine(height - i - 1, 2 * i + 1);
      if (i > 0) {
        diamond += '\n';
      }
    }
    return diamond;
  }
  
  console.log(makeDiamond(5));