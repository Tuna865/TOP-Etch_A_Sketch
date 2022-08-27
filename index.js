const container = document.getElementById("grid-container");
const addButton = document.getElementById("addButton")
const resetButton = document.getElementById("resetButton")
const gridContainer = document.querySelector("#grid-container");
               
function createGrid(number) {
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number * number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        gridContainer.appendChild(div);
    }
    document.querySelector(".grid-dimensions").textContent = `Current Grid Size: ${number}x${number}`;
}

function changeColor(event){
    event.target.style.backgroundColor = "black";
}

addButton.addEventListener('click', () => {
    // prompt returns a string, so this needs to be number-ized
    let newGrid = Number(prompt(
        "What grid dimensions would you like?", 
        'Enter a number from 1-100'))
        if(newGrid > 100){
            alert("Please enter a number less than or equal to 100")
        } else{
            while(gridContainer.hasChildNodes()){
                gridContainer.removeChild(gridContainer.firstChild)
            }    
            createGrid(newGrid);
            let gridBoxList = document.querySelectorAll(".grid-box");
            gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
        }
})

let defaultGrid = 16;
createGrid(defaultGrid);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

resetButton.addEventListener("click", () => {
        window.location.reload()
})