var color = 'black';
let click = true;

function createGrid(size){
    var grid = document.querySelector('.grid');
    var squares = grid.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    var amount = size * size;
    for (let i = 0; i < amount; i++) {
        var square = document.createElement('div');
        square.setAttribute("class", "squares");
        square.setAttribute("id", "squares");
        square.addEventListener('mouseover', defaultColor);
        square.style.backgroundColor = 'white';
        grid.appendChild(square);
    }
}

createGrid(16);

function changeSize(value){
    createGrid(value);
    document.getElementById('sizeText').innerText = value + " x " + value;
}

function defaultColor(){
    this.style.backgroundColor = color;
}

var colorInput = document.getElementById('color');
colorInput.addEventListener('input', () =>{
    color = colorInput.value;
})

function resetGrid(){
    var grid = document.querySelector('.grid');
    var squares = grid.querySelectorAll('div');
    squares.forEach((div)=> (div.style.backgroundColor = "white"));
}

document.querySelector('.grid').addEventListener("click", () => {
    click = !click;
    console.log('log');
})

document.getElementById('gridCheckbox').addEventListener("change", (e) => {
    if (e.target.checked) {
        document.getElementById('squares').style.border = "1px solid rgb(156, 156, 156)";
    }
    else{
        document.getElementById('squares').style.border = "0";
    }
})