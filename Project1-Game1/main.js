/*Testing hardcoiding ship positions*/

var shipsPlayer1 = [9,10,11,12,21,29,37,50,51]; // each index references gridCells array
var shipsPlayer2 = [2,3,15,23,31,58,59,60,61];
var gridCells = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2','C3','C4', 'C5', 'C6', 'C7', 'C8', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'];

var players = [ {id:1},{ id:2} ];

var currentPlayer = players[0].id; //updated in nextplayer function
// populate the cells with event listeners for both players
createCells(players[0].id); // send player 1
createCells(players[1].id); // send player 2

function createCells(player) {
  var gridCellIndex = 0; // initialize index 0
  for (var j = 1; j < 9; j++) {
    for (var i = 1; i < 9; i++) {
      var cell = document.createElement('div'); //create div
      var rowId = "player"+player+"row"+j;
      cell.classList.add('cell');// add class cell
      var parentElRow = document.getElementById(rowId)//get parent div
      var createdId = "p"+player + gridCells[gridCellIndex];
      console.log(createdId);
      cell.setAttribute("id",createdId); // apply id as cell
      var cell = parentElRow.appendChild(cell); //add child of row
      // add event listener to each cell
      var cellCreated = document.getElementById(createdId);
      cellCreated.addEventListener('click', store);
      console.log(cell);
      gridCellIndex ++;
    };
  };
};

// this function stores and sends the mouse event information to other functions
//
function store() { // argument passed is the cell clicked  on by player
  console.log("called store function. Here I am!");
  var idString = event.srcElement.id;
  var targetCell = idString[2] + idString[3];
  var elTarget = event.srcElement;
  console.log(elTarget);
  checkHitOrMiss(currentPlayer, targetCell, idString, elTarget);
  this.removeEventListener('click',store); // remove the listener

  console.log(idString);
};

//target parameter = 'A3'
function checkHitOrMiss(player, cell, elementId, elTarget) {
  console.log("here is the loop of the opponent ships array");
  console.log("This is the player's clicked cell id :::: " + elementId );

  //start Checking the player 2 ships
  // if target = a cell in player 2 ships - it's a hit
  if (currentPlayer === 1) {
    var opponentShips = shipsPlayer2;
    console.log(opponentShips)
  } else if (currentPlayer === 2){
    opponentShips = shipsPlayer1;
    console.log(opponentShips);
  }

  for (var shipsIndex = 0; shipsIndex < 9; shipsIndex ++ ) {
    var opponentCell = gridCells[opponentShips[shipsIndex]]; // index converted to cell value
    console.log(opponentCell);
    if (cell === opponentCell) {
        //call hit function
        console.log("it's a hit go to hit function....");
        hit(elTarget);
        return;
    }
  }
  console.log("it's a miss go to miss function...");
  miss(elTarget);
};

function hit(cell) {
  console.log("you reached the hit function");
  console.log(cell);
  cell.style.backgroundColor = 'red'; //it's a hit
  // cell
  nextPlayer();
};

function miss(cell) {
  console.log("you reached the miss function");
  console.log(cell);
  cell.style.backgroundColor = 'lightblue'; // it's a miss
  nextPlayer();
};

function nextPlayer(){
  players.unshift(players.pop());
  currentPlayer = players[0].id;
  console.log(" changed ... currentPlayer: "+currentPlayer)
};

function renderTurn(){
  var turnAlert = document.getElementsByClassName('turnAlert');
  console.log(turnAlert);
}
/*
// get random index
var randIndex = Math.floor(Math.random() * (65 - 0));
//get random cell
var randCell = gridCells[randIndex];
// find neighboring cells to make a ship
var ship = randCell
*/
