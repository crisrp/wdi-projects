/*Testing hardcoding ship positions*/
alert("Starting Game, go Player 1");

// using this array to keep the cell names for an 8x8 grid, these cell names are referenced in other places in the program
var gridCells = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2','C3','C4', 'C5', 'C6', 'C7', 'C8', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'];
//intialize variable for score
var p1score = 0; 
var p2score = 0;

// array of objects for players, later used to determine the current player in a nextPlayer fxn
var players = [
  {
    id:1,
    shipLocations: [9,10,11,12,21,29,37,50,51],
  },
  {
    id:2,
    shipLocations: [2,3,15,23,31,58,59,60,61],
  }
];

var currentPlayer = players[0].id; //the current player is updated after each player is done with their turn in nextPlayer fxn

// populate the cells with event listeners for both players by calling the function createCells
// first left side grid (player1) then right side grid (player2)
createCells(players[0].id); // send player 1
createCells(players[1].id); // send player 2

//
// Create Cells - fxn updates the DOM with cell elements to fill a grid for each player
//
function createCells(player) {
  var gridCellIndex = 0; // initialize index as 0 to traverse the gridCells array object and create 64 cells per grid
  for (var j = 1; j < 9; j++) { // outer loop - verifies that each row is filled with 8 cells
    for (var i = 1; i < 9; i++) { // inner loop - controls creation of each cell
      var cell = document.createElement('div'); //create div element to represent 1/64 cells on the grid
      var rowId = "player"+player+"row"+j; // string concatenation to manipulate one character to form the id we need to work with to append a child div element 
      // uses the parameter (player) passed into this function to create ex. player1row1/player2row1
      cell.classList.add('cell');// add class to each div 'cell' 
      var parentElRow = document.getElementById(rowId)// get parent div (row) where new div (cell) will be appended as a child
      var createdId = "p"+player + gridCells[gridCellIndex]; // creating a unique id for each new cell
      
      console.log(createdId); // testing id creation
      
      cell.setAttribute("id",createdId); // apply created id to new cell
      var cell = parentElRow.appendChild(cell); // make new cell child of row element
      
      var cellCreated = document.getElementById(createdId); // get new cell element 
      cellCreated.addEventListener('click', store); // add event listener to the new cell
      
      console.log("new cell " + cell " created..."); // testing new cell created
      gridCellIndex ++; // increment the cell label to make sure we create 64 new cells for player 1 and 64 cells for player 2
    };
  };
};
//
// store - fxn stores and sends the mouse click event information to other functions
//
function store() { // argument passed is the cell clicked  on by player
 
  var idString = event.srcElement.id; // get full id of the cell clicked ex. 'p1A3'
  console.log(idString); // testing got the correct element
  
  var targetCell = idString[2] + idString[3]; // get cell value ex. 'A3'
  var elTarget = event.srcElement; // get the HTML element that was clicked 
  
  console.log(elTarget); // testing - print HTML element clicked
  
  checkHitOrMiss(targetCell, idString, elTarget); // call fxn to determine hit or miss to opponent's ships
  
  this.removeEventListener('click',store); // remove the listener from the element, restrict further interactivity with this cell
};

//
// check result of mouse click event for gameplay
//
function checkHitOrMiss(targetCell, elementId, elTarget) {
  // if targetCell is a cell in the opponent's ship locations --> it's a hit
  if (currentPlayer === 1) { 
    var opponentShips = players[1].shipLocations; // set opponent ships to be player 2's ship locations
    console.log(opponentShips) // testing check opponent ships array
  
  } else if (currentPlayer === 2){ 
    opponentShips = players[1].shipLocations; // set opponent ships to be player 1's ship locations
    console.log(opponentShips); // testing check opponent ships array
  }

  for (var shipsIndex = 0; shipsIndex < 9; shipsIndex ++ ) {
    var opponentCell = gridCells[opponentShips[shipsIndex]]; // index converted to cell value
    console.log(opponentCell);
    if (targetCell === opponentCell) {
        //call hit function
        console.log("it's a hit go to hit function....");
        hit(elTarget);
        return;
    }
  }
  console.log("it's a miss go to miss function...");
  miss(elTarget);
};
//
function hit(elTarget) {
  console.log("you reached the hit function");
  console.log(elTarget);
  console.log("current player in hit function is " + currentPlayer);
  elTarget.style.backgroundColor = 'red'; //it's a hit
  if (currentPlayer == 1) {
    console.log("YOU ENTERED THE NESTED IF OF HIT FOR PLAYER 1")
    document.querySelector('#player1status').innerHTML = '<h2>HIT!</h2>';
    p1score ++;
    //find the ships cell below opponent p2 grid and style bg red
    // ****code here *****
    if (p1score === 9) { // check if game is over
      gameOver(1);
    }
  } else if (currentPlayer == 2) {
    console.log("YOU ENTERED THE ELSE IF OF HIT FOR PLAYER 2");
    document.querySelector('#player2status').innerHTML = '<h2>HIT!</h2>';
    p2score ++;
    if (p2score === 9) { // check if game is over
      gameOver(2);
    }
    //find the ships cell below opponent p1 grid and style bg red
    // ****code here *****
  }
  nextPlayer();
};
//
function miss(elTarget) {
  console.log("you reached the miss function");
  console.log(elTarget);
  elTarget.style.backgroundColor = 'black'; // it's a miss
  if (currentPlayer == 1) {
    console.log("CURRENT PLAYER IS 1 and p1 status should be MISS");
    document.querySelector('#player1status').innerHTML = '<h2>MISS!</h2>';
    //find the ships cell below opponent p2 grid and style bg red
    // ****code here *****
  } else if (currentPlayer == 2) {
    document.querySelector('#player2status').innerHTML = '<h2>MISS!</h2>';
    //find the ships cell below opponent p1 grid and style bg red
    // ****code here *****
  }
  nextPlayer();
};
//
function nextPlayer(){
  var p2header = document.querySelector('#player2container');
  var p1header = document.querySelector('#player1container');
  players.unshift(players.pop()); // swap player 1 for player 2
  currentPlayer = players[0].id; // at position players index 0
  if (currentPlayer === 1) {
    console.log(" current player is 1"); // Testing
    p2header.style.backgroundColor = 'white';
    p1header.style.backgroundColor = 'orange';
  } else if (currentPlayer === 2) {
    console.log("current player is 2"); // Testing
    p1header.style.backgroundColor = 'white';
    p2header.style.backgroundColor = 'orange';
  }
};
function gameOver(winner) {
  if (winner === 1) {
    var p1win = document.querySelector('#p1win');
    p1win.style.color = 'white';
  } else {
    var p2win = document.querySelector('#p2win');
    p2win.style.color = "white";
  }
  alert("GameOver Player"+ winner + " wins!");

};

