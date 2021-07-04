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
let gameBoard, isWinner, playerTurn, x, y
/*------Cached Element References------*/
const rowEl = document.getElementsByTagName('tr') //y-direction
const columnEl = document.getElementsByTagName('td') //x-direction
const resetBtn = document.querySelector('#restart')
const messageEl = document.querySelector('#gameMessage')
const cells = document.querySelectorAll('cell')
/*------Event Listeners------*/
for(i = 0 ; i < columnEl.length ; i++){
columnEl[i].addEventListener('click', handleClick)
}

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
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
    ]

    isWinner = false
    playerTurn = randomTurn() //randomly picks who goes first
    
    //render()
 
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

function handleClick(event) {
    console.log('clicked')
    x = event.target.cellIndex
    y = event.target.parentElement.rowIndex
  console.log(`${y}, ${x}`)
    validMove()
    //isWinner = checkWinner()
    //render()
    return 
}
//change to gameBoard?
//iterate through all the cells =================================check call======================
Array.prototype.forEach.call(columnEl , function (cell) {
    cell.addEventListener('click' , render)
    cell.style.backgroundColor = 'white'
})

function render (event) {
    // retrieving what column we are working in
    let column = event.target.cellIndex
    // row starts at 5(bottom) and incraments to 0 as the top index
    // makes sure the game piece will go to the next available spot
    let row = []


    //handleClick
    //start from the bottom
    for (i = 5; i > -1; i--){
        //.children will let me go into each spot or cell within each row index left and right
        if (rowEl[i].children[column].style.backgroundColor == 'white'){
            row.push(rowEl[i].children[column]);
            if (playerTurn === 1){
                row[0].style.backgroundColor = 'red';
                if (horizontalWinCondition() || verticalWinCondition() || //diagonalWinCondition() || 
                diagonalWinCondition2()
                ){
                    messageEl.textContent = `${player1} WINS!!`;
                    messageEl.style.color = 'red';
                    return alert(`${player1} WINS!!`);
                }else if (isWinner === checkTie()){  //-------------------------work on tie games! also line 144
                    messageEl.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    messageEl.textContent = `${player2}'s turn`
                    return playerTurn = -1;
                }
            }else{
                row[0].style.backgroundColor = 'blue';
                if (horizontalWinCondition() || verticalWinCondition() 
                //|| diagonalWinCondition() 
                || diagonalWinCondition2()
                ){
                    messageEl.textContent = `${player2} WINS!!`;
                    messageEl.style.color = 'blue';
                    return alert(`${player2} WINS!!`);
                }else if (isWinner === checkTie()){
                    messageEl.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    messageEl.textContent = `${player1}'s turn`;
                    return playerTurn = 1;
                }
                
            }
        }
    }
//     for(i = 0; i < columnEl.length; i++) {
//         for(j = 0; j < rowEl.length; j++){
//         if (element === 1) {
//             columnEl.style.background = 'blue'
//         } else if (element === -1) {
//             columnEl.style.background = 'red'
//         } else {
//             columnEl.style.background = 'white'
//         }
//     }
// }



// if (isWinner === false) {
//     if(playerTurn === 1){
//         messageEl.innerHTML = `It is ${player1}'s turn!`
//     } else {
//         messageEl.innerHTML = `It is ${player2}'s turn!`
//     }
// } else if (isWinner === 'T') {
//     messageEl.innerHTML = 'It is a tie!'
// } else {
//     if (isWinner = 1) {
//         messageEl.innerHTML = `Congrats ${player1}! You Win!`
//     } else {
//         messageEl.innerHTML = `Congrats ${player2}! You Win!`
//     }
// }
}

    function checkColor(one , two, three, four) {
       if (one === two && one === three && one === four && one !== 'white' && one !== undefined)
       return true
        // if(gameBoard.includes(null)) {
            //     return false
            // } else {
                // return "T"
                // }
    }
        
    function horizontalWinCondition() {
        //checks for horizonal win
        //iterating through all 6 rows and horizonatally theres 4 possible winning conbinations per row
        for (let x = 0; x < 6; x++){
            for (let y = 0; y < 4; y++){
                //checking if 4 colors match by retreiving the children nodes of the rows
                if (checkColor(rowEl[x].children[y].style.backgroundColor, rowEl[x].children[y+1].style.backgroundColor, rowEl[x].children[y+2].style.backgroundColor, rowEl[x].children[y+3].style.backgroundColor)){
                    return true
                }
            }
        }

    }

    function verticalWinCondition() {
        //iterating through all 7 columns and checking for the 3 possible winning combinations per column
        for (let y = 0; y < 7; y++){
            for (let x = 0; x < 3; x++){
                if (checkColor(rowEl[x].children[y].style.backgroundColor, rowEl[x+1].children[y].style.backgroundColor, rowEl[x+2].children[y].style.backgroundColor, rowEl[x+3].children[y].style.backgroundColor)){
                    return true
                }
            }
        }
    }

    function diagonalWinCondition() {
        //iterate through all 7 columns and checking 12 possible winning combinations for it possible to be true
        for (let y = 0; y < 3; y++){
            for (let x = 0; x < 4; x++){
                if (checkColor(rowEl[x].children[y].style.backgroundColor, rowEl[x-1].children[y-1].style.backgroundColor, rowEl[x-2].children[y-2].style.backgroundColor, rowEl[x-3].children[y-3].style.backgroundColor)){
                    return true
                }
            }
        }

    }

    function diagonalWinCondition2() {
        // iterating from right to left 
        for (let y = 0; y < 4; y++){
            for (let x = 0; x < 3; x++){
                if (checkColor(rowEl[x].children[y].style.backgroundColor, rowEl[x+1].children[y+1].style.backgroundColor, rowEl[x+2].children[y+2].style.backgroundColor, rowEl[x+3].children[y+3].style.backgroundColor)){
                    return true
                }
            }
        }
    }

    function checkTie() {
    if(gameBoard.includes(null)) {
        return false
    } else {
    return "T"
    }
    }

    function validMove() {
        // if(gameBoard[sqNum] || isWinner === true ) {
            //     return
            //     }   
     }
        
     function timer() {
            
    }