let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompuetrChoice(){
    const choices = ['r','p','s'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}
function convertWord(letter){
    if (letter === "r") return "Stone"
    if(letter === "p")return "Paper"
    return "scissorsn"
}
function win(user,comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Computer" + convertWord(comp) + "And you"+ convertWord(user) +" You choose, you won " ;
    const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add('green');
    setTimeout(function(){userChoice_div.classList.remove('green')},300);
}
function lose(user,comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Copmuter" + convertWord(comp) + "And you"+ convertWord(user) +" You choose, you lost " ;
     const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add('red');
    setTimeout(function(){userChoice_div.classList.remove('red')},300);
}
function draw(user,comp){
    result_p.innerHTML = "Equalized !" ;
    const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add('gray');
    setTimeout(function(){userChoice_div.classList.remove('gray')},300);
}
function game(userChoice){
    const compChoice = getCompuetrChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;    
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}
main();
