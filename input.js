// by default set direction and last direction nowhere 
let inputDir = { x: 0, y: 0 } 
let lastInputDir = { x: 0, y: 0 } 

export function getInputDir() { 
    lastInputDir = inputDir 
    return inputDir
} 

window.addEventListener('keydown', e => {
    // e.key is key up, key down, key left or key right
    switch (e.key) {
        case 'ArrowUp': 
            // if moving up or down at present ignore line 13
            // cannot select up if direction is going down 
            if (lastInputDir.y !== 0) break 
            // y: -1 moves up
            inputDir = { x: 0, y: -1 } 
            break            
        case 'ArrowDown': 
            // if moving up or down at present ignore line 19
            if (lastInputDir.y !== 0) break
            // y: 1 moves down
            inputDir = { x: 0, y: 1 } 
            break  
        case 'ArrowLeft': 
            // if moving left or right at present ignore line 25 
            if (lastInputDir.x !== 0) break 
            // x: -1 moves left
            inputDir = { x: -1, y: 0 } 
            break  
        case 'ArrowRight': 
            // if moving left or right at present ignore line 31
            if (lastInputDir.x !== 0) break 
            // x: 1 moves right
            inputDir = { x: 1, y: 0 } 
            break  
    }
}) 


