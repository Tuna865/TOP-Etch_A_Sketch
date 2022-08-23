const container = document.getElementById("grid-container");
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
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}
defaultGrid()

const paintCell = () =>{
    cells.className = 'paintedCell'
}

// This is not working
// for some reason all of the cells are being selected at once or something
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseover', paintCell)
}
