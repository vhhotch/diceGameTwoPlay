let playerOneTurn = true;
let playerOneScore = 0;
let playerTwoScore = 0;
let randomRoll = 0;
const rollButton = document.querySelector(".roll");
rollButton.style.display = "none"
const startGameButton = document.querySelector(".start");
startGameButton.style.display = "unset"
const diceImage = document.querySelector(".diceimage");


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
    }
}

/*
the startGame function swaps the buttons over by calling the swapButtons function
*/

const startGame = ()=> {
    swapButtons();
}

const rollFunction = () => {
    if (randomRoll !=1){
        score();
        hasThePlayerWon();
        console.log ("Working")
        changePlayer();
    }
    else {
        playerOneScore = 0;
        playerTwoScore = 0;
        console.log ("Lost")
    }
}
    // let randomRoll = 0;
    // rollDice();
    
    
    


/* when the start game button is pressed it swaps the buttons, from displaying start game to roll. 

*/
startGameButton.addEventListener("click", ()=>{
    startGame()
})

rollButton.addEventListener("click", ()=>{
    rollDice()
})

const rollDice = () => {
    randomRoll = Math.floor(Math.random()*6)+1;
    console.log(`${randomRoll}`)
    diceImage.src = `img/dice${randomRoll}.png`
    rollFunction()
}


const hasThePlayerWon = () => {
    if (playerOneScore >20) {
        console.log ("You won!")
        playerOneScore =0;
    }
}

const score =() => {
    if (playerOneTurn){
        playerOneScore+=randomRoll;
        document.querySelector(".playerOneInfo").textContent = `Player 1 your score is ${playerOneScore}`
        document.querySelector(".playerTwoInfo").textContent = `Player 2 your score is ${playerTwoScore}`
    }
    else {
        playerTwoScore+=randomRoll;
        document.querySelector(".playerOneInfo").textContent = `Player 1 your score is ${playerOneScore}`
        document.querySelector(".playerTwoInfo").textContent = `Player 2 your score is ${playerTwoScore}`
    }
}

const changePlayer =() =>{
    if (playerOneTurn){
        playerOneTurn=false;
    }
    else {
        playerOneTurn=true;
    }
}


// class Player {
//     constructor (name) {
//         this.name=name;
//         this.activeTurn=false;
//     }
// }