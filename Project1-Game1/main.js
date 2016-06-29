/*Testing hardcoiding ship positions*/

var shipsPlayer1 = [9,10,11,12,21,29,37,50,51]; // each index references gridCells array
var shipsPlayer2 = [2,3,15,23,31,58,59,60,61];
var gridCells = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2','C3','C4', 'C5', 'C6', 'C7', 'C8', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'];

var targetsPlayer1 = []; // moves made by player1
var targetsPlayer2 = [];

function createCells() {
  var gridCellIndex = 0; // initialize index 0
  for (var j = 1; j < 9; j++) {
    for (var i = 1; i < 9; i++) {
      var cell = document.createElement('div'); //create div
      var rowId = "player1row"+j;
      cell.classList.add('cell');// add class cell
      var parentElRow = document.getElementById(rowId)//get parent div
      var createdId = gridCells[gridCellIndex];
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

// this function stores and sends the mouse event information
function store(cell) { // argument passed is the cell clicked  on by player
  console.log("called store function. Here I am!");
  // this should be a seperate function

  var targetId = event.srcElement.id;
  var elTarget = event.srcElement;
  console.log(elTarget);

  checkHitOrMiss(targetId, elTarget);

  targetsPlayer2.push(targetId);
  this.removeEventListener('click',store); // remove the listener
  // console.log(cell);
  // console.log(targetId);
  // console.log(targetsPlayer2);
};
//target parameter = 'A3'
function checkHitOrMiss(target, elTarget) {
  console.log("here is the loop of the opponent ships array");
  console.log("This is the player's clicked cell :::: " + target);
  console.log("this is the shipsPlayer2 array of indices:::: " + shipsPlayer2);


  //start Checking the player 2 ships
  // if target = a cell in player 2 ships - it's a hit
  for (var shipsIndex = 0; shipsIndex < 9; shipsIndex ++ ) {
    var opponentCell = gridCells[shipsPlayer2[shipsIndex]]; // index converted to cell value
    console.log(opponentCell);
    if (target === opponentCell) {
        console.log("it's a hit");
    //     // turn the element with ID of target
    //     elTarget.style.backgroundColor = 'red'; //it's a hit
    } else {
        console.log("it's a miss");
        // elTarget.style.backgroundColor = 'lightblue'; // it's a miss
    }
  };
};
// function hit() {
//
// }
// function miss() {
//
// }

//add elements of grid and add Event listener

// for (var i = 1; i < 9; i++) {
//   var cell = document.createElement('div'); //create div targetsPlayer2
//   cell.classList.add('cell');// add class cell
//   var parentElRow = document.getElementById('player1row1')//get parent div
//   cell.setAttribute("id","A"+i); // apply id as cell
//   var cell = parentElRow.appendChild(cell); //add child of row
// };

//
//
// for(var i = 0; i<gridCells.length;i++) {
//   cell.setAttribute("id","div"+i);
// }


/*
// get random index
var randIndex = Math.floor(Math.random() * (65 - 0));
//get random cell
var randCell = gridCells[randIndex];
// find neighboring cells to make a ship
var ship = randCell
*/


//$('.cell').on('click', checkOpponentShips());
