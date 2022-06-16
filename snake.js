import { getInputDir } from "./input.js"; 

// export number of times snake moves per second 
export let SNAKE_SPEED = 1
// represent snake as array of x, y positions 
const snakeBody = [{ x: 11, y: 11 }] 
let newPieces = 0 
let scoring = 0
const GRID_SIZE = 32

function randGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1, 
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
} 

let apple = getRandAppleLocation()
// how much the snake grows after eating apple(s) 
// eats 1 apple - grows another snake piece 
const GROWTH_RATE = 1 

export function update() { 
    addPieces() 

    const inputDir = getInputDir()
    // loop through every part of snake except last snake piece. 
    // last piece of snake disappears. 
    // this gives us 2nd to last element in snake; 
    // when i is greater than or equal to 0 stop loop; 
    // subtract 1 from i each time
    for (let i = snakeBody.length - 2; i >= 0; i--) { 
        // i+1 is going to be last element
        // take this previous element & set to current element 
        // as brand new object. shifting entire snake position. 
        snakeBody[i + 1] = { ...snakeBody[i] } 
    } 

    // update snake position based on input direction 
    snakeBody[0].x += inputDir.x 
    snakeBody[0].y += inputDir.y 

    if (onSnakeBody(apple)) {
        // if apple is on snakeBody position 
        expandSnakeBody(GROWTH_RATE)
        apple = getRandAppleLocation() 

        // increment the score display every time snake body lands on apple
        scoring++; 
        document.getElementById("playerScore").innerText = scoring; 
        // increase snake speed by 1 after snake body lands on apple
        SNAKE_SPEED++;        
    }    
} 

export function draw(gameboard) { 
    snakeBody.forEach(snakePiece => { 
        // snake element in gameboard at particular x, y coordinate 
        const snakeElement = document.createElement('div') 
        // set row position to y and column position to x
        snakeElement.style.gridRowStart = snakePiece.y 
        snakeElement.style.gridColumnStart = snakePiece.x  
        snakeElement.classList.add('snake') 
        gameboard.appendChild(snakeElement) 
    }) 

    // apple element in gameboard at certain x, y coordinate 
    const appleElement = document.createElement('div') 
    // set row position to y and column position to x
    appleElement.style.gridRowStart = apple.y 
    appleElement.style.gridColumnStart = apple.x  
    appleElement.classList.add('apple') 
    gameboard.appendChild(appleElement) 
}

// takes a number for how much snakeBody expands 
export function expandSnakeBody(quantity) { 
    newPieces += quantity  
} 

export function onSnakeBody(location, { ignoreSnakeHead = false } = {}) { 
    // check to see if this location is on the snakeBody, if so return sameSpot
    return snakeBody.some((snakePiece, index) => { 
        if (ignoreSnakeHead && index === 0) return false  
        // compare location with snakePiece to check if equal 
        return sameSpot(snakePiece, location) 
    }) 
}

export function getHead() {
    return snakeBody[0] 
}

export function snakeCrisscross() { 
    // is head of snake touching other parts of snake 
    return onSnakeBody(snakeBody[0], { ignoreSnakeHead: true })
}

function sameSpot(location1, location2) {
    return location1.x === location2.x && location1.y === location2.y 
} 

function addPieces() { 
    // add newPieces of snake onto end of existing snakeBody 
    for (let i = 0; i < newPieces; i++) {
        // one more index than current snakeBody length
        // take last element of snakebody & duplicating that onto end of snakeBody
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) 
    } 
    newPieces = 0
} 

export function getRandAppleLocation() {
    // returns new position for apple every single time apple gets eaten 
    // position returned will not be on the snake
    let newAppleLocation 
    while (newAppleLocation == null || onSnakeBody(newAppleLocation)) {
        // randGridPosition() will return random x y value inside the grid
        newAppleLocation = randGridPosition() 
    } 
    return newAppleLocation 
} 