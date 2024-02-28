# 034.lesson_14

## Task

## Description:
Create a simplified version of the "Tetris" game, where the primary element is a cube. This cube automatically moves down 50 pixels every second. The player can move the cube left and right, but cannot move it once it reaches the bottom of the playing area. The cube should not exit the boundaries of the user's screen.

## Technical Requirements:
Core Functionality:
Visualize a cube that can move down 50 pixels every second.
Add the ability for the player to move the cube left and right using control keys.
Ensure the cube stops when it reaches the bottom of the playing field.
User Interface:
Create a simple interface that displays the playing field.
The playing field should have boundaries to prevent the cube from going out of its limits.
## Game Logic:
The cube should not cross or exit the boundaries of the playing field.
Once the cube reaches the bottom, it should be "locked" and no longer able to move.
Additional Requirements:
Pay attention to code cleanliness and structure.
Ensure that the game operates error-free.
## Extra Tasks (Optional):
Implement a Scoring System:
Add a scoring system, for example, points for each downward movement.
Multiple Cubes:
Allow cubes to accumulate at the bottom of the playing field. When a new cube reaches other cubes or the bottom, it should be locked in place.
Variety of Shapes:
Introduce different shapes, not just a cube.
## Resources and Tips:
Use setInterval or SetTimeout for moving the cube downwards.
Handle key presses using addEventListener.
Manage styles with JavaScript to move the cube.
## Submission:
Your project should be available in a GitHub repository with clear instructions on how to run it in README.md.
Ensure your code is organized and readable.

## The project was deployed on the GitHub page using the [link]()

## Rules of the game:
- press enter to start the game
- you can move the cube as long as it falls, after it reaches the floor of the playing field or another cube it cannot be moved.
- it is possible to move the cube using the arrow keys "left" and "right" or "a" and "d"