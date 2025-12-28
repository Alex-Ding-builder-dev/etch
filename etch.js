const container = document.querySelector('.container');
function createGrid(num) {
    container.innerHTML = ''
    container.style.gridTemplateColumns = `repeat(${num},1fr)`
    container.style.gridTemplateRows= `repeat(${num},1fr)`
    for (let i = 0; i < num * num;i ++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.dataset.darkness = 0;
        container.appendChild(grid);
    }
    
}

createGrid(16)

container.addEventListener('mouseover', (event) => {
    if (!event.target.matches('.grid')) {
        return;
    }
    if (event.target.dataset.darkness == 0) {
        event.target.style.backgroundColor =  `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        event.target.dataset.darkness = (+event.target.dataset.darkness + 0.1).toFixed(1);
    }
    else if (+event.target.dataset.darkness > 0 && +event.target.dataset.darkness <= 1){
        event.target.dataset.darkness = (+event.target.dataset.darkness + 0.1).toFixed(1);
    }
    event.target.style.setProperty('--darkness',+event.target.dataset.darkness)
})

const button = document.querySelector('button');
button.addEventListener('click', ()=> {
    let input
    while (true) {
        input = prompt();
        if (input === null) {
            return
        }
        if (!Number.isNaN(+input) && +input <= 100 && +input >0) {
            break;
        }
        else {
            alert('please let input is right')
        }
    }
    createGrid(input)   
})