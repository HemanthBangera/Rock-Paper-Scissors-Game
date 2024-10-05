const choices = ['rock','scissors','paper']
const playerdisplay = document.getElementById("playerdisplay")
const computerdisplay = document.getElementById("computerdisplay")
const resultdisplay = document.getElementById("resultdisplay")
const pscore = document.getElementById("pscoredisplay")
const cscore = document.getElementById("cscoredisplay")
let playerscore=0;
let computerscore=0;

function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)]
    console.log(computerchoice)
    let result="";

    if(playerchoice===computerchoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerchoice){
            case 'rock':
                result = computerchoice=='scissors'?"YOU WON!":"YOU LOST!"
                break
            case 'paper':
                result = computerchoice=='rock'?"YOU WON!":"YOU LOST!"
                break
            case 'scissors':
                result = computerchoice=='paper'?"YOU WON!":"YOU LOST!"
        }
    }
    playerdisplay.textContent = `PLAYER:${playerchoice}`;
    computerdisplay.textContent = `COMPUTER:${computerchoice}`;
    resultdisplay.textContent = result;
    resultdisplay.classList.remove("green","red")

    if( resultdisplay.textContent == "YOU WON!"){
        resultdisplay.classList.add("green")
        playerscore++;
    }
    else if(resultdisplay.textContent == "YOU LOST!"){
        resultdisplay.classList.add("red");
        computerscore++;
    }
    pscore.textContent = playerscore
    cscore.textContent = computerscore

}