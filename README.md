# rock-paper-scissorsn
js game



![photo_2022-01-14_19-13-02](https://user-images.githubusercontent.com/25683280/149573096-ece6f6c0-9c9e-4b16-b9ff-69330e029bc2.jpg)



Rock-and-paper-game
Javascript game

Rock-and-paper-game
Javascript game
This project is a traditional game design - rock, paper and scissors that runs online between the user and the computer And includes an html file for the structure of the project appearance and css for the styles used and js that are the core Is the main game. In the appearance of the project, the page is designed with html codes and is marked with the id element, which is through this id in Js files to implement the rules of the game on it and also with css general style for the game environment in opnions have been asked . Main part of the project: In the js.App file, which is the main part of the project, javascript code is written, two general variables for userScore We have user rating and compScore for computer rating and maintenance.

let userScore = 0; let compScore = 0 ;

With id and class selectors the required parameters like each of the 3 moves are displayed on the page It is specified, the final score board, user and computer points, etc. are all received as one We have defined const in the project.

const userScore_span = document.getElementById("user-score"); const compScore_span = document.getElementById("comp-score"); const scoreBoard_div = document.querySelector(".score_board"); const result_p = document.querySelector(".result > p"); const rock_div = document.getElementById("r"); const paper_div = document.getElementById("p"); const scissors_div = document.getElementById("s");

We have a method called getCompuetrChoice in which the computer moves in the game between three general values ​​of rock and paper And the scissors are marked. We have an array of 3 values, one of which is the selection and return values ​​with a random function Is. For example: If r is selected from the array, the computer selects the rock state:

function getCompuetrChoice(){ const choices = ['r','p','s']; const randomNum = Math.floor(Math.random()*3); return choices[randomNum]; }

The convertWord method for converting the letters s, p, r to string characters are their names, ie rock, paper and Scissors that are used to display on the screen and then call it :

function convertWord (letter) { if (letter === "r") return "rock" if (letter === "p") return "paper" "Scissors" return }

For this game we have 3 general modes, the user has won, lost or drawn, for each of the 3 modes one A separate method is written so that we can specify both the user and computer selected elements on the page Show the user a message based on the game mode. There are methods called win, lose and draw. In these methods, the winner's score is added a value and the result is entered in the scoreboard in html. For example, the winning method

function win(user,comp){ userScore++; userScore_span.innerHTML = userScore; compScore_span.innerHTML = compScore;

result_p.innerHTML = "Computer + " convertWord(comp) + " You and +" convertWord(user) +" ; " You choosed,You won " const userChoice_div = document.getElementById(user) userChoice_div.classList.add('green'); setTimeout(function(){userChoice_div.classList.remove('green')},300); }

We came to the main rule of the game, which is to win, lose and draw according to the user and computer choices are . Since we get the values ​​with the lowercase letters r, s and p, then we can describe the rules this way Which rs means the user has selected the rock rock with the lowercase letter r and the computer scissors with the lowercase letter s and relative Their combination determines the rules of the game. Example: If the user has selected a stone and the computer has scissors, then the user wins because the stronger stone is scissors is . These rules are written because it is nested with a switch that has different cases that result in 3 modes The final means winner, loser and equalizer

function game(userChoice){ const compChoice = getCompuetrChoice(); switch(userChoice+compChoice){ case "rs": case "pr": case "sp": win(userChoice,compChoice); break; case "rp": case "ps": case "sr": lose(userChoice,compChoice); break; case "rr": case "pp": case "ss": draw(userChoice,compChoice); break; } }

Finally, the main method, which is an EventListener to get the user's game movement, when selected by The user also selects the selected movement of the computer and according to the rules and methods defined, the final result of the game on the page is shown .
