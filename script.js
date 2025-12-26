
// refer the container div
const containerDiv = document.getElementById("grid-container");

function makeGrid(){
    for(let i=0; i<16; i++){
        const row = document.createElement("div");
        for(let j=0; j<16; j++){
            const column = document.createElement("div");
            row.appendChild(column);
            column.textContent = `${i},${j}`;
        }
        containerDiv.appendChild(row)
    }
}
makeGrid();
