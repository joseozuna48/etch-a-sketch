const sketch_section = document.querySelector(".sketch-grid");
let slider = document.querySelector(".slider");
let gridSize = document.querySelector(".gridSize");


function createGrid(num) {
    
    let size =  Math.floor(100/num); 
    sketch_section.style.gridTemplateColumns = `repeat(${num},1fr)`;

    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement("div");

        div.addEventListener("mouseenter", colorBackground);

        sketch_section.appendChild(div);
        

    }
}

function colorBackground(){
    this.style.backgroundColor  = "black";
}

function deleteGrid (){
    while(sketch_section.firstChild){
        sketch_section.removeChild(sketch_section.firstChild);
    }
}



slider.addEventListener("mouseup",()=>{
    
    deleteGrid();
    createGrid(slider.value);
    
});

slider.addEventListener("input",()=>{
    gridSize.textContent = `${slider.value} X ${slider.value} `;
})


createGrid(16);