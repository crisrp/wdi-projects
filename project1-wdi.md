## Battleship --Notes--
1. Set the grid
  - create an object called grid with cells A-G, 1-8
  - create 2 instances of the object, 1 for each player
  - create an array to hold positions of ships by cell label
  - create an array of cell labels
    - A1, A2, A3, A4, A5, A6, A7, A8
    - B1, B2, B3, B4, B5, B6, B7, B8
    - C1, C2, C3, C4, C5, C6, C7, C8
    - D1, D2, D3, D4, D5, D6, D7, D8
    - E1, E2, E3, E4, E5, E6, E7, E8
    - F1, F2, F3, F4, F5, F6, F7, F8
    - G1, G2, G3, G4, G5, G6, G7, G8
    - H1, H2, H3, H4, H5, H6, H7, H8
  - generate a random number to get random cell
  - ex. random generate cell is C5 - next cell taken is B5 and D5 or C4, C6
  - ex. random generate cell is D8 - next cell taken is C8 and E8 or C6, C7
  - hold cell in an array for cells already taken
  - the grid is set to hold each of the following for each player
    - 1 ship (Destroyer) with size 2 cells
    - 1 ship (Submarine) with size 3 cells
    - 1 ship (Battleship) with size 4 cells

2. game play screen
  - instructions at the top
  - show message - Game started!
  - display two target grids side by side
  - display 3 ships facing horizontally listed vertically below target grids
  - each ship with 3 or 2 cell size (Destroyer, Battleship, Submarine)
  - show message player 1 pick your target!
    - left half of screen bg color [any] - right half bg color [white]
    - event listener on for click
    - player clicks a target cell
    - message below grid shows ("That's a HIT!") or ("That's a MISS")
    - if (That's a HIT!) - right half battleship hit is highlighted marked with red X
    - if (That's a MISS!) - 'show player 2's turn!'
  - same gameplay for player 2 - right half of screen bg color[any] left half bg color[white]

3. game over
  - when player 1 or player 2 sinks the last ship on player 2's side
    - if player 1's hit 9 times (for 3 ships) or player 2 hit 9 times
    - show message player 1 or player 2 wins!

4. css/html
  - container instructions
  - container left half player 1 target + container right half player 2 target
    - container below target
      - IT'S A HIT (message hit)
      - IT'S A MISS (message miss)
    - container below target display 3 ships

