import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getHead, snakeCrisscross, 
    update as updateApple, draw as drawApple} from './snake.js' 

let lastRenderTime = 0 
let gameOver = false 
const gameboard = document.getElementById('gameboard') 
const GRID_SIZE = 32 

// refresh screen when 'new game' button is selected
let btn = document.getElementById("newGame");
btn.addEventListener("click", function() {
    location.reload();
})

// currentTime = exact timestamp of when main() runs 
function main(currentTime) {  
    if (gameOver) {
        // return alert('GAME OVER!!!') 
        if (confirm('GAME OVER! You Lose... <br/>Press ok to restart.')) {
            window.location = '/' 
        }
        return 
    } 

    window.requestAnimationFrame(main) 
    // find number of seconds since last render
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000  
    // check if secondsSinceLastRender is essentially less  
    // than between our renders. if this is so, snake does  
    // not have to move snake, however new animation frame  
    // is required. 
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    // ask browser when can I render my next frame 
    // here you are requesting a frame to animate the game 
    lastRenderTime = currentTime 

    update() // updates game logic
    // moves snake to correct position.  
    // update if apple(s) gets eaten or not, 
    // update if snake gets longer 
    // game over if snake hits itself or the wall
    
    draw() // draws or renders everything based on update loop 
} 

window.requestAnimationFrame(main) 

function update() {
    updateSnake() 
    updateApple() 
    // if snake runs into itself or goes off grid
    dies()  
} 

function draw() { 
    // this clears everything in our view.  
    // snake moves without showing any prior snake piece behind it.
    gameboard.innerHTML = ''
    drawSnake(gameboard) 
    drawApple(gameboard)
} 

function offGrid(location) {
    // if argument passed is bigger than the GRID_SIZE or 
    // less than minimum GRID_SIZE 
    return (
        location.x < 1 || location.y < 1 || 
        location.x > GRID_SIZE || location.y > GRID_SIZE
    ) 
} 

function dies() {
    gameOver = offGrid(getHead()) || snakeCrisscross()
} 