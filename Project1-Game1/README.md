# Battleship 

##Links
GitHub Pages - https://crisrp.github.io/wdi-projects/Project1-Game1/

GitHub repo - https://github.com/crisrp/wdi-projects/tree/master/Project1-Game1

###Overview
This is a simplified battleship game. It's meant to be played by two players on one screen. Battleship, played by the rules, positions 5 ships on a grid. The aim of the game is to target your opponents ships and sink them by taking shots (guessing) their unknown locations. Each turn, you're allowed 1 shot, and you get immediate feedback about your shot. Was it a hit or miss? If it is a hit, you're also told which of the five ships were hit. The first player to sink all of the opponent's ships wins. 

## Unresolved problems
- Clearing the text of hit or miss status on each player's turn
- Keeping track of hits in the slots for each ship below the target grid
- Removing the event listener for the player 1 grid when it is player 2's turn
- The ship locations of player 1 and player 2 ships are hardcoded in the javascript file. Should create a fxn to randomize ship locations

##Technology used
- HTML
- CSS
- Javascript

##How It Works
- On the start of the game player 1 goes first by taking a gues on the left side grid. Player 1 takes one guess. It becomes player 2's turn. Player two's container turns full orange and takes a guess on the grid on the left side. 
- Repeat until one player reaches 9 hits.


