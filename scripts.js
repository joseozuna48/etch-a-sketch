const sketch_section = document.querySelector(".sketch-grid");


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

createGrid(50);