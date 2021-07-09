
/*------Constants------*/
const player1 = prompt("What is player one's name?")
const player2 = prompt("What is player two's name?")

/*------Variables (state)------*/
let gameBoard, playerTurn

/*------Cached Element References------*/
const rowEl = document.getElementsByTagName('tr') 
const columnEl = document.getElementsByTagName('td') 
const resetBtn = document.querySelector('.restart')
const messageEl = document.querySelector('#gameMessage')
const cells = document.querySelectorAll('.cell')
const backgroundMusicbtn = document.querySelector('.music')
const backgroundMusicbtnOff = document.querySelector('.musicOff')
const playerClick = new Audio ('Audio/mixkit-winning-a-coin-video-game-2069.wav')
const playerWin = new Audio ('Audio/mixkit-casino-bling-achievement-2067.wav')
const resetSound = new Audio ('Audio/mixkit-video-game-retro-click-237.wav')
const backgroundMusic = new Audio ('Audio/mixkit-game-level-music-689.wav')

/*------Event Listeners------*/
cells.forEach(function (cell) {
    cell.addEventListener('click' , render)
})

resetBtn.addEventListener('click', function() {
    const resetSound = new Audio ('Audio/mixkit-video-game-retro-click-237.wav')
    resetSound.play()
    init()
})

backgroundMusicbtn.addEventListener('click', backgroundMusicOn)
backgroundMusicbtnOff.addEventListener('click' , ()=>{
    backgroundMusic.pause()
})
/*------Functions------*/

init()

function init() {
    cells.forEach(cell => {
        cell.style.backgroundColor ='white'
        cell.style.opacity = '.3'
        cell.addEventListener('click' , render)
    })
    playerTurn = randomTurn()
    if (playerTurn === 1){
        messageEl.innerText = `${player1} goes first`
        messageEl.style.color = 'rgb(208, 219, 51)'
    } else {
        messageEl.innerText = `${player2} goes first`
        messageEl.style.color = 'rgb(235,4,80)'
    }
}

function randomTurn () {
    turn = Math.random()
    if (turn < .5) {
        return 1
    } else {
        return -1
    }
}

function render (event) {
    let column = event.target.cellIndex
    console.log('column' , column)
    let stack = []
    const playerClick = new Audio ('Audio/mixkit-winning-a-coin-video-game-2069.wav')
    playerClick.play()
    playerClick.volume = .3
    
    for (i = 5; i > -1; i--){
        if (rowEl[i].children[column].style.backgroundColor == 'white'){
            stack.push(rowEl[i].children[column])
            if (playerTurn === 1){
                stack[0].style.backgroundColor = 'rgb(208, 219, 51)'
                stack[0].style.opacity = '.9'
                console.log(stack)
                if (horizontalWinCondition() || verticalWinCondition() || diagonalWinCondition() || diagonalWinCondition2()){
                    messageEl.innerText = `${player1} WINS!!`;
                    messageEl.style.color = 'rgb(208, 219, 51)';
                    playerWin.play()
                    
                    cells.forEach(function (cell) {
                        cell.removeEventListener('click' , render , false)
                    })
                    return
                }else if ( checkTie() ){ 
                    messageEl.innerText = 'Tie Game!';
                    return alert('Tie Game!');
                }else{
                    messageEl.innerText = `${player2}'s turn`
                    messageEl.style.color = 'rgb(235,4,80)'
                    return playerTurn = -1;
                }
            }else{
                stack[0].style.backgroundColor = 'rgb(235,4,80)';
                stack[0].style.opacity = '.9'
                console.log(stack)
                if (horizontalWinCondition() || verticalWinCondition() || diagonalWinCondition() || diagonalWinCondition2()){
                    messageEl.innerText = `${player2} WINS!!`;
                    messageEl.style.color = 'rgb(235,4,80)';
                    playerWin.play();

                    cells.forEach(function (cell) {
                        cell.removeEventListener('click' , render , false)
                    })
                    return
                }else if ( checkTie() ){
                    messageEl.innerText = 'Tie Game!';
                    return
                }else{
                    messageEl.innerText = `${player1}'s turn`;
                    messageEl.style.color = 'rgb(208, 219, 51)'
                    return playerTurn = 1;
                }  
            }
        }
    } 
}

function backgroundMusicOn(){
    backgroundMusic.play()
    backgroundMusic.volume = .1
    backgroundMusic.loop = true
}

function checkTie() {
  let gameBoard = []
  for( i = 0; i < columnEl.length; i++){
    if(columnEl[i].style.backgroundColor !== 'white'){
        gameBoard.push(columnEl[i])
    }
}
if (gameBoard.length === 42) {
    return true
}
}

function checkColor(one , two, three, four) {
    if (one === two && one === three && one === four && one !== 'white' && one !== undefined)
    return true
}
    
function horizontalWinCondition() {
    for (let y = 0; y < 6; y++){
        for (let x = 0; x < 4; x++){
            if (checkColor(rowEl[y].children[x].style.backgroundColor, rowEl[y].children[x+1].style.backgroundColor, rowEl[y].children[x+2].style.backgroundColor, rowEl[y].children[x+3].style.backgroundColor)){
                return true
            }
        }
    }
}

function verticalWinCondition() {
    for (let y = 0; y < 7; y++){
        for (let x = 0; x < 3; x++){
            if (checkColor(rowEl[x].children[y].style.backgroundColor, rowEl[x+1].children[y].style.backgroundColor, rowEl[x+2].children[y].style.backgroundColor, rowEl[x+3].children[y].style.backgroundColor)){
                return true
            }
        }
    }
}

function diagonalWinCondition() {
    for (let x = 0; x < 4; x++){
        for (let y = 5; y > 2; y--){
            if (checkColor(rowEl[y].children[x].style.backgroundColor, rowEl[y-1].children[x+1].style.backgroundColor, rowEl[y-2].children[x+2].style.backgroundColor, rowEl[y-3].children[x+3].style.backgroundColor)){
                return true
            }
        }
    }
}

function diagonalWinCondition2() {
    for (let x = 0; x < 4; x++){
        for (let y = 0; y < 3; y++){
            if (checkColor(rowEl[y].children[x].style.backgroundColor, rowEl[y+1].children[x+1].style.backgroundColor, rowEl[y+2].children[x+2].style.backgroundColor, rowEl[y+3].children[x+3].style.backgroundColor)){
                return true
            }
        }
    }
}
      