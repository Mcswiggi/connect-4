//connect 4 psudeocode
// 1) define variables used to track the state of the game (playerTurn, gameBoard, isWinner, etc ...), . 
    // figure out how to make the gameboard

// 2) store cached element references to connect javascript constants to elements on HTML page (gameBoard , gameMessage, whoseTurn)


// 3) create an initializing function to clear the board and necessary state variables

// create start button and clicked (init), prompt for player names and board appears

// create a function that determines who goes first

// create timer function for after player names are entered is pressed

// 4) create function render to apply changes to where in the gameBoard array the current player is going to drop their game piece.  Within this function i should have some logic that the game piece will go to the bottom of the column depending on if there is a game piece there or not. (valid move  function)

// if statmente for if isWinner = false then it is player 1 or 2 turn, if all the spots on the board are not null then it is a 'T' or announce the winner
// display a message for whose turn it is. prompt for player names
// display game state. whose turn it is, win, tie

// 5)  after each click, a checkWinner function to check for winning combinations of 4.  I want to include an easteregg to check for 5 in a row
// also start timer for the next person . -Winning cominations

// 6) define constants. create draw function (gameBoard = !null) is a Tie

// 8) create a reset button that re-initializes the game state / board / variables

//wireframe: https://wireframe.cc/qUCucN

// SUPER BONUS: 
// keep track of who's the winner

// or create an indexing piece dropper?

/*------Constants------*/
const winningCombinations = []
const player1 = 1   //prompt("What is player one's name?")
const player2 = -1  //prompt("What is player two's name?")
/*------Variables (state)------*/
let gameBoard, isWinner, playerTurn
/*------Cached Element References------*/
const gameBoardEl = document.querySelectorAll('div')
const resetBtn = document.querySelector('#restart')
const messageEl = document.querySelector('#gameMessage')

/*------Event Listeners------*/
gameBoardEl.forEach((spot) => {
    spot.addEventListener('click', handleClick)
})

/*------Functions------*/

init()

function init() {
    gameBoard = [
        // [1,1,3,4,5,6],
        // [1,2,3,4,5,6],
        // [1,2,3,4,5,6],
        // [1,2,3,4,5,6],
        // [1,2,3,4,5,6],
        // [1,2,3,4,5,6],
        // [1,2,3,4,5,6],
        [1, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, 1, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, 1],
    ]


    isWinner = false
    playerTurn = randomTurn() //randomly picks who goes first
    
    render()
 
}

function randomTurn () {
    turn = Math.random()
    if (turn < .5) {
        return 1
    } else {
        return -1
    }
}

function clearText () {

}

function render () {
    // gameBoard.forEach(function(column, idx) {
    //     gameBoardEl[idx].style.background= 'blue'
    //     console.log(gameBoard[idx])
    //     gameBoard[idx].forEach(function(spot,idx) {
    //         console.log(spot, idx)
    //     })
    //     })
        // column.forEach(function(spot, idx) {
        //   spot[idx].style.background = 'blue'  
        // })

    // })

    
    if (isWinner === false) {
        if(playerTurn === 1){
            messageEl.innerHTML = `It is ${player1}'s turn!`
        } else {
            messageEl.innerHTML = `It is ${player2}'s turn!`
        }
    } else if (isWinner === 'T') {
        messageEl.innerHTML = 'It is a tie!'
    } else {
        if (isWinner = 1) {
            messageEl.innerHTML = `Congrats ${player1}! You Win!`
        } else {
            messageEl.innerHTML = `Congrats ${player2}! You Win!`
        }
    }
}

function checkWinner() {

}

function validMove() {

}

function timer() {

}

function handleClick(spot) {
    console.log('clicked')
    console.log(spot.cellIndex)
    playerTurn *= -1
    validMove()
    isWinner = checkWinner()
    render()
}