/*

Setting up all of the variables needed for the game to work. 

*/

let playerOneTurn = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let randomRoll = 0;
const rollButton = document.querySelector(".roll");
rollButton.style.display = "none"
const startGameButton = document.querySelector(".start");
startGameButton.style.display = "unset"
const diceImage = document.querySelector(".diceimage");
const playerOneAlert = document.querySelector(".playerOneInfo");
playerOneAlert.style.visibility = "hidden";
const playerTwoAlert = document.querySelector(".playerTwoInfo")
playerTwoAlert.style.visibility = "hidden";
const playerOneScoreAlert = document.querySelector(".playerOneScoreAlert");
const playerTwoScoreAlert = document.querySelector(".playerTwoScoreAlert");


/*
Adding the points to the players score
*/

const score =() => {
    if (playerOneTurn){
        playerOneScore+=randomRoll;
        console.log(playerOneScore)
        playerOneScoreAlert.textContent = `Player 1 your score is ${playerOneScore}`
    }
    else {
        playerTwoScore+=randomRoll;
        console.log(playerTwoScore)
        playerTwoScoreAlert.textContent = `Player 2 your score is ${playerTwoScore}`
    }
}

/*
Reset the scores
*/

const resetScores = ()=>{
    playerOneScore = 0;
    playerTwoScore = 0;
}

/*
the swap buttons function changes start game button to roll button or vice versa
*/

const swapButtons = () => {
    if (startGameButton.style.display != "unset"){
        startGameButton.style.display = "unset";
        rollButton.style.display = "none";
    }

    else {
        startGameButton.style.display = "none";
        rollButton.style.display = "unset"
        // displayScoreAlert();
    }
}

/*
change player turns
*/

const changePlayer =() =>{
    if (playerOneTurn){
        playerOneTurn=false;
        playerOneScoreAlert.style.color = "red";
        playerTwoScoreAlert.style.color = "green"

    }
    else {
        playerOneTurn=true;
        playerOneScoreAlert.style.color = "green";
        playerTwoScoreAlert.style.color = "red";
    }
}

/*
Display the players scores (when the game begins)
*/
const displayScoreAlert = () => {
    console.log(`My score is: ${playerOneScore}`);
    playerOneScoreAlert.textContent = `Player 1 your score is ${playerOneScore}`
    playerOneScoreAlert.style.visibility = "visible";
    playerTwoScoreAlert.textContent = `Player 2 your score is ${playerTwoScore}`
    playerTwoScoreAlert.style.visibility = "visible";
}

/*
Roll function checks if it player scored 1, or allows game to continue
*/

const rollFunction = () => {
    if (randomRoll !=1){
        score();
        hasThePlayerWon();
        changePlayer();
    }
    else {
        resetScores()
        if (playerOneTurn){
            playerOneAlert.textContent = `You lost Player One! You rolled 1.`
            playerOneAlert.style.visibility = "visible"
            playerOneScoreAlert.style.visibility = "hidden"
            playerTwoAlert.textContent = `You won Player Two! Congrats!`
            playerTwoAlert.style.visibility = "visible"
            playerTwoScoreAlert.style.visibility = "hidden"
        }
        else {
            playerOneAlert.textContent = `You WON Player One! Congrats!`
            playerOneAlert.style.visibility = "visible"
            playerOneScoreAlert.style.visibility = "hidden"
            playerTwoAlert.textContent = `You LOST Player Two! You rolled 1.`
            playerTwoAlert.style.visibility = "visible"
            playerTwoScoreAlert.style.visibility = "hidden"
        }
        swapButtons();
    }
} 

/*
roll dice, number 1-6
*/

const rollDice = () => {
    randomRoll = Math.floor(Math.random()*6)+1;
    // console.log(`${randomRoll}`)
    diceImage.src = `img/dice${randomRoll}.png`
    rollFunction()
}

/*

Checking to see if the player has got over 20 points, and has therefore won the game. 

*/

const hasThePlayerWon = () => {
    if (playerOneScore >20) {
        playerOneAlert.textContent = `You WON Player One with ${playerOneScore}!`;
        playerOneAlert.style.visibility = "visible";
        playerOneScoreAlert.style.visibility = "hidden";
        playerTwoAlert.textContent =" You LOST Player Two!";
        playerTwoAlert.style.visibility= "visible";
        playerTwoScoreAlert.style.visibility = "hidden";
        playerOneScore =0;
        playerTwoScore = 0;
        swapButtons()
    }
    else if (playerTwoScore>20) {
        playerTwoAlert.textContent = `You WON Player Two with ${playerTwoScore}!`;
        playerTwoAlert.style.visibility= "visible";
        playerTwoScoreAlert.style.visibility = "hidden";
        playerOneAlert.textContent =" You LOST Player One!";
        playerOneAlert.style.visibility = "visible";
        playerOneScoreAlert.style.visibility = "hidden";
        playerOneScore =0;
        playerTwoScore = 0;
        swapButtons()
    }
}


/* when the start game button is pressed it swaps the buttons, from displaying start game to roll. 

*/

const startGame = ()=> {
    resetScores();
    playerOneAlert.style.visibility = "hidden";
    playerTwoAlert.style.visibility = "hidden";
    displayScoreAlert();
    swapButtons();
}

/*
the startGame button listens for being clicked
*/

startGameButton.addEventListener("click", ()=>{
    startGame()
})

/*
the roll button listens for being clicked
*/

rollButton.addEventListener("click", ()=>{
    rollDice()
})


