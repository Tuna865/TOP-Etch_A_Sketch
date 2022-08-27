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
function defaultGrid(rows, columns) {
    makeRows(rows);
    makeColumns(columns);
}
// defaultGrid(16,16)


// Extra Credit Stuff

/*
// let colors = ['#ff0000', '#00ff00', '#0000ff']
const colors = [
    'red',
    'blue', 
    'yellow', 
    'green', 
    'orange', 
    'purple', 
    'brown',
    'pink'
]
const randomColor = colors[Math.floor(Math.random() * colors.length)]

*/


let paintedCell = 'paintedCell'

function colorize(event){
    const target = event.target
    target.className = paintedCell
}

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseover', colorize)
}

addButton.addEventListener('click', () => {
    let newGrid = prompt("How many squares would you like to add?")
    defaultGrid(newGrid, newGrid)
})
resetButton.addEventListener("click", () => {
    setTimeout(startOver = () => {
        window.location.reload()
    })
})