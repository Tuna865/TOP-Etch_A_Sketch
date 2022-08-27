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
        // having issues with this not rejecting a string or NaN, even though it should
        if(newGrid > 100 || newGrid < 0 || newGrid === NaN){
            alert("Please enter a number between 1 and 100.")
        }else{
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