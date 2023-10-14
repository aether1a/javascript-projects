const test = require('../RPS.js');

test("returns 'TIE!' if P1 = P2", function(){
    let output = test.whoWon(player1,player2);
    expect(output).toBe("TIE!");
 });

test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    let output = test.whoWon('rock','paper');
    expect(output).toBe("Player 2 wins!");
 });

 test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
    let output = test.whoWon('scissors','rock');
    expect(output).toBe("Player 2 wins!");
 });