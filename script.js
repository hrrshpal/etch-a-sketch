let userChoice = 16;

//Adding Game Name
const gameName = document.createElement("h1")
gameName.textContent = "ETCH-A-SKETCH";
gameName.setAttribute("id", "name")
document.body.appendChild(gameName)

// Adding Controls
const gameControls = document.createElement("div")
gameControls.setAttribute("id", "controls")
document.body.appendChild(gameControls)


// Control 1 -> button to ask grid size
const changeGridBtn = document.createElement("button")
changeGridBtn.setAttribute("class", "btn")
changeGridBtn.textContent = "Change Grid Size"
changeGridBtn.addEventListener("click", () => {
    userChoice = prompt("Enter the number of squares per side")
    if(Number(userChoice) <= 100){
        containerDiv.textContent = ""
        makeGrid(userChoice)
    } else {
        containerDiv.textContent = ""
        makeGrid(16)
    }
})
gameControls.appendChild(changeGridBtn)

// Control 2 -> RGB
function rgb(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

const rgbBtn = document.createElement("button")
rgbBtn.setAttribute("class", "btn")
rgbBtn.textContent = "RGB Mode"
rgbBtn.addEventListener("click", () => {
    document.querySelectorAll(".cols").forEach( square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = rgb()
        })
    })
})
gameControls.appendChild(rgbBtn)

// COntrol 3 -> Dim


// Control 4 -> Reset

const reset = document.createElement("button")
reset.setAttribute("class", "btn")
reset.textContent = "Reset"
reset.addEventListener("click", () => {
    document.querySelectorAll(".cols").forEach( square => {
        square.style.backgroundColor = "white"
    })
})
gameControls.appendChild(reset)

// Making the game container div
const containerDiv = document.createElement("div")
containerDiv.setAttribute("class", "container")
document.body.appendChild(containerDiv)


function makeGrid(userChoice){
    // Adding square divs in the container div
    for(let i=1; i<=userChoice; i++){
        // creating a row
        const rowsDiv = document.createElement("div")
        rowsDiv.setAttribute("class", "row")
        // creating a column
        for(let j=1; j<=userChoice; j++){
            const colsDiv = document.createElement("div")
            colsDiv.setAttribute("class", "cols")
            colsDiv.style.height = `${450/userChoice}px`;
            colsDiv.style.width = `${450/userChoice}px`;
            colsDiv.addEventListener("mouseover", () => {
                colsDiv.style.backgroundColor = "red"
            })
            // Appending rows and columns
            rowsDiv.appendChild(colsDiv)
        }
        containerDiv.appendChild(rowsDiv)
    }
}

makeGrid(userChoice)
