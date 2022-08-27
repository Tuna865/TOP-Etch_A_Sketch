const container = document.getElementById("grid-container");
const addButton = document.getElementById("addButton")
const resetButton = document.getElementById("resetButton")
const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementsByClassName("cell");

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};
function makeGrid(rows, columns) {
    makeRows(rows);
    makeColumns(columns);
}
makeGrid(16,16)



let paintedCell = 'paintedCell'

function colorize(event){
    const target = event.target
    target.className = paintedCell
}

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseover', colorize)
}

addButton.addEventListener('click', () => {
    console.log('add squares button pressed')
    // prompt returns a string, so this needs to be number-ized
    let newGrid = Number(prompt(
        "How many squares would you like to have on each side?", 
        'Enter a number from 1-100'))

    if(newGrid > 100){
     alert("Please enter a number less than or equal to 100")
    } else{makeGrid(newGrid, newGrid)}


})
resetButton.addEventListener("click", () => {
    setTimeout(startOver = () => {
        window.location.reload()
    })
})