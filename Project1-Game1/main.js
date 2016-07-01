/*Testing hardcoding ship positions*/

 /* using this array to keep the cell names for an 8x8 grid, these cell names are referenced in other places in the program*/

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

var currentPlayer = players[0].id; //updated in nextplayer function

// set default styling for HIT or MISS status
player1status.innerHTML = '<h2>_</h2>';
// player1status.style.backgroundColor = 'orange';
player1status.color = 'orange';
player2status.innerHTML = '<h2>_</h2>';
// player2status.style.backgroundColor = 'white';
player2status.color = 'white';
// populate the cells on the page with event listeners for both players
createCells(players[0].id); // send player 1
createCells(players[1].id); // send player 2

//Create Cells - fxn updates the DOM with cell elements to fill a grid for each player
function createCells(player) {
  var gridCellIndex = 0; // initialize index as 0 to traverse the gridCells array object and create 64 cells per grid
  for (var j = 1; j < 9; j++) { // outer loop - verifies that each row is filled with 8 cells
    for (var i = 1; i < 9; i++) { // inner loop - controls creation of each cell
      var cell = document.createElement('div'); //create div element to represent 1/64 cells on the grid
      var rowId = "player"+player+"row"+j; // string concatenation to manipulate one character to form the id we need to work with to append a child div element
      // uses the parameter (player) passed into this function to create ex. player1row1/player2row1
      cell.classList.add('cell');// add class cell to each div 'cell'
      var parentElRow = document.getElementById(rowId)// get parent div (row) where new div (cell) will be appended as a child
      var createdId = "p"+player + gridCells[gridCellIndex]; // creating a unique id for each new cell
      cell.setAttribute("id",createdId);
      var cell = parentElRow.appendChild(cell);
      var cellCreated = document.getElementById(createdId); // the new cell has a unique id
      cellCreated.addEventListener('click', store);
      gridCellIndex ++;
    };
  };
};
//
function checkInput(idString) {
  if (currentPlayer === 1 && idString[1] === 2) {
    alert("You clicked your opponent's target grid. Try again.");
    return false;
  } else if (currentPlayer === 2 && idString[1] === 1) {
    alert("You clicked your opponent's target grid. Try again.");
    return false;
  } else {
    return true;
  }
}
// fxn stores and sends the mouse event information to other functions
function store() { // argument passed is the cell clicked  on by player
  var idString = event.srcElement.id;
  var valid = checkInput(idString);
  if (valid === false){
      return;
  }
  player1status.innerHTML = '<h2>_</h2>';
  player2status.innerHTML = '<h2>_</h2>';
  var targetCell = idString[2] + idString[3]; // getting the cell name of the clicked cell
  var elTarget = event.srcElement; // getting the element that was clicked
  checkHitOrMiss(targetCell, idString, elTarget); // send mouse click info to check hit or miss
  this.removeEventListener('click',store); // remove the listener , disable for future clicks
};

// fxn does one thing if the current player is 1 or 2
function checkHitOrMiss(targetCell, elementId, elTarget) {
  if (currentPlayer === 1) {
    var opponentShips = players[1].shipLocations;
  } else if (currentPlayer === 2){
    opponentShips = players[1].shipLocations;
  }

  // check against opponent ship locations
  for (var shipsIndex = 0; shipsIndex < 9; shipsIndex ++ ) {
    var opponentCell = gridCells[opponentShips[shipsIndex]]; // index converted to cell value
    if (targetCell === opponentCell) {
        hit(elTarget);
        return;
    }
  }
  miss(elTarget);
};
//
function hit(elTarget) {
  elTarget.style.backgroundColor = 'red'; //it's a hit
  if (currentPlayer == 1) {
    player1status.innerHTML = '<h2>HIT!</h2>';
    p1score ++;

    if (p1score === 9) { // check if game is over
      gameOver(1);
    }
  } else if (currentPlayer == 2) {
    player2status.innerHTML = '<h2>HIT!</h2>';
    p2score ++;
    if (p2score === 9) { // check if game is over
      gameOver(2);
    }
  }
  nextPlayer();
};
//
function miss(elTarget) {

  elTarget.style.backgroundColor = 'black'; // it's a miss
  if (currentPlayer == 1) {
    player1status.innerHTML = '<h2>MISS!</h2>';

  } else if (currentPlayer == 2) {
    player2status.innerHTML = '<h2>MISS!</h2>';

  }
  nextPlayer();
};
//
function nextPlayer(){

  players.unshift(players.pop()); // swap player 1 for player 2
  currentPlayer = players[0].id; // at position players index 0

  if (currentPlayer === 1) {
    turnAlertBox.innerHTML = '<h2>Player 1, your turn</h2>';
    player2container.style.backgroundColor = 'white';

    player1container.style.backgroundColor = 'orange';
  } else if (currentPlayer === 2) {

    turnAlertBox.innerHTML = '<h2>Player 2, your turn</h2>';
    player1container.style.backgroundColor = 'white';

    player2container.style.backgroundColor = 'orange';
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
