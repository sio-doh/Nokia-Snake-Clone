// by default set direction and last direction nowhere 
let inputDir = { x: 0, y: 0 } 
let lastInputDir = { x: 0, y: 0 } 

export function getInputDir() { 
    lastInputDir = inputDir 
    return inputDir
}

let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right'); 

// executes function when user presses up / down / left / right button on screen 
up.addEventListener("click", function() { 
    // cannot select up if direction is going down 
    if (lastInputDir.y !== 0) {
        return;
    }  
    // y: -1 moves up
    inputDir = { x: 0, y: -1 }   
});

down.addEventListener("click", function() { 
    // cannot select down if direction is going up 
    if (lastInputDir.y !== 0) {
        return;
    }  
    // y: 1 moves down
    inputDir = { x: 0, y: 1 }   
});

left.addEventListener("click", function() { 
    // cannot select left if direction is going right 
    if (lastInputDir.x !== 0) {
        return;
    }
    // x: -1 moves left
    inputDir = { x: -1, y: 0 } 
}); 

right.addEventListener("click", function() { 
    // cannot select right if direction is going left 
    if (lastInputDir.x !== 0) {
        return;
    }  
    // x: 1 moves right
    inputDir = { x: 1, y: 0 } 
}); 

window.addEventListener('keydown', e => {
    // e.key is key up, key down, key left or key right
    switch (e.key) {
        case 'ArrowUp': 
            // if moving up or down at present ignore line 60 
            // cannot select up if direction is going down 
            if (lastInputDir.y !== 0) break 
            // y: -1 moves up
            inputDir = { x: 0, y: -1 } 
            break            
        case 'ArrowDown': 
            // if moving up or down at present ignore line 66 
            if (lastInputDir.y !== 0) break
            // y: 1 moves down
            inputDir = { x: 0, y: 1 } 
            break  
        case 'ArrowLeft': 
            // if moving left or right at present ignore line 72 
            if (lastInputDir.x !== 0) break 
            // x: -1 moves left
            inputDir = { x: -1, y: 0 } 
            break  
        case 'ArrowRight': 
            // if moving left or right at present ignore line 78  
            if (lastInputDir.x !== 0) break 
            // x: 1 moves right
            inputDir = { x: 1, y: 0 } 
            break  
    }
}) 
