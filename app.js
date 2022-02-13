const board = document.querySelector('#board')
const SQUARES_NUMBER = 10000
const colors = ['#fce803','#a1fc03','#00ffd0','#0048ff','#3300ff','#8400ff','#ff00ff','#ff0077', '#ff5e00', '#ffae00']


for (let i = 0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    if (i == 9999){ 
        square.classList.add('img-class');
    }else{
        square.classList.add('square');
    };

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    if(element.classList.contains('img-class')){
        return;
    }
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 15px #fff`
    element.style.transform = 'rotate(45deg)'
}

function removeColor (element) {
    element.style.backgroundColor = '#552424'
    element.style.boxShadow = '0 0 2px #000'
    element.style.transform = 'rotate(-360deg)'
}

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
