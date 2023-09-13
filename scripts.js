const sketch_section = document.querySelector(".sketch-grid");
let slider = document.querySelector(".slider");
let gridSize = document.querySelector(".gridSize");
let resetBtn = document.querySelector(".resetBtn");
let radioBtns = document.querySelectorAll(`[name="color"]`);


function createGrid(num) {
    
    let size =  Math.floor(100/num); 
    sketch_section.style.gridTemplateColumns = `repeat(${num},1fr)`;

    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement("div");

        div.addEventListener("mouseenter",colorBackground);

        sketch_section.appendChild(div);

    }
}

function colorBackground(){
    let color = "";

    radioBtns.forEach( radio=>{
        if(radio.checked == true){
            color = radio.value;
        }
    });
    
    this.style.backgroundColor  = (color === "random")? randomColor():color ;
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

function randomColor(){
    let red = Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}


slider.addEventListener("mouseup",resetGrid);

slider.addEventListener("input",()=>{
    gridSize.textContent = `${slider.value} X ${slider.value} `;
});

resetBtn.addEventListener("click",resetGrid);

createGrid(16);

