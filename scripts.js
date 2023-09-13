const sketch_section = document.querySelector(".sketch-grid");
let slider = document.querySelector(".slider");
let gridSize = document.querySelector(".gridSize");
let resetBtn = document.querySelector(".resetBtn");


function createGrid(num) {
    
    let size =  Math.floor(100/num); 
    sketch_section.style.gridTemplateColumns = `repeat(${num},1fr)`;

    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement("div");

        div.addEventListener("mouseenter", colorBackground);

        sketch_section.appendChild(div);
        

    }
}

function colorBackground(color){
    this.style.backgroundColor  = "black";
}

function deleteGrid (){
    while(sketch_section.firstChild){
        sketch_section.removeChild(sketch_section.firstChild);
    }
}

function resetGrid(){
    deleteGrid();
    createGrid(slider.value);
}


slider.addEventListener("mouseup",resetGrid);

slider.addEventListener("input",()=>{
    gridSize.textContent = `${slider.value} X ${slider.value} `;
});

resetBtn.addEventListener("click",resetGrid);

createGrid(16);