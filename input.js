// by default set direction and last direction nowhere 
let inputDir = { x: 0, y: 0 } 
let lastInputDir = { x: 0, y: 0 } 

export function getInputDir() { 
    lastInputDir = inputDir 
    return inputDir
}

let top = document.getElementById('top');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');

// execute function when user presses a key on keyboard
top.addEventListener("click", function() { 
    // if user presses "Enter" key on keyboard
    if ('top'.key === "Enter") {
        document.getElementById('top').click();
    }
});

down.addEventListener("click", function() { 
    if ('down'.key === "Enter") {
        document.getElementById('down').click();
    }  
});

left.addEventListener("click", function() { 
    if ('left'.key === "Enter") {
        document.getElementById('left').click();
    }
}); 
right.addEventListener("click", function() { 
    if ('right'.key === "Enter") {
        document.getElementById('right').click();
    } 
});

window.addEventListener('keydown', e => {
    // e.key is key up, key down, key left or key right
    switch (e.key) {
        case 'ArrowUp': 
            // if moving up or down at present ignore line 48
            // cannot select up if direction is going down 
            if (lastInputDir.y !== 0) break 
            // y: -1 moves up
            inputDir = { x: 0, y: -1 } 
            break            
        case 'ArrowDown': 
            // if moving up or down at present ignore line 54
            if (lastInputDir.y !== 0) break
            // y: 1 moves down
            inputDir = { x: 0, y: 1 } 
            break  
        case 'ArrowLeft': 
            // if moving left or right at present ignore line 60 
            if (lastInputDir.x !== 0) break 
            // x: -1 moves left
            inputDir = { x: -1, y: 0 } 
            break  
        case 'ArrowRight': 
            // if moving left or right at present ignore line 66
            if (lastInputDir.x !== 0) break 
            // x: 1 moves right
            inputDir = { x: 1, y: 0 } 
            break  
    }
}) 
