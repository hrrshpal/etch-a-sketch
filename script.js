let userChoice = 16;

// Adding Game name and controls
const gameControls = document.createElement("div")

// Game name
const h1 = document.createElement("h1")
h1.textContent = "ETCH-A-SKETCH"
h1.style.textAlign = "center"
gameControls.appendChild(h1)

// button to ask grid size
const changeGridBtn = document.createElement("button")
changeGridBtn.setAttribute("class", "change-grid")
changeGridBtn.textContent = "Change Grid Size"
changeGridBtn.addEventListener("click", () => {
    userChoice = prompt("Enter the number of squares per side")
    if(Number(userChoice) <= 100){
        div.textContent = ""
        makeGrid(userChoice)
    } else {
        div.textContent = ""
        makeGrid(16)
    }
})
gameControls.appendChild(changeGridBtn)

// Appending game control div in body
document.body.prepend(gameControls)

// Selecting the container div
const div = document.querySelector(".container")

function makeGrid(userChoice){
    // Adding square divs in the container div
    for(let i=1; i<=userChoice; i++){

        // creating a row
        const rowsDiv = document.createElement("div")
        rowsDiv.setAttribute("class", "row squares")

        // creating a column
        for(let j=1; j<=userChoice; j++){
            const colsDiv = document.createElement("div")
            colsDiv.setAttribute("class", `cols squares${j}`)
            colsDiv.style.height = `${500/userChoice}px`;
            colsDiv.style.width = `${500/userChoice}px`;
            colsDiv.addEventListener("mouseover", () => {
                colsDiv.style.backgroundColor = "pink"
            })


            // Appending rows and columns
            rowsDiv.appendChild(colsDiv)
            div.appendChild(rowsDiv)
        }
    }
}

makeGrid(userChoice)
