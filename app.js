const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let start = document.querySelector('#start-btn')
let reset = document.querySelector('#reset-btn')

let result = 0;
let currentTimeLeft = timeLeft.textContent;
let hitPosition = null;
let timerId = null;
let moleTimerId = null;

console.log(squares)
console.log(mole)

squares.forEach(square => {
    square.addEventListener('mouseup', () => {
        if(square.id === hitPosition){
            result += 1
            score.textContent = result
            hitPosition=null
        }
    })
})

function randomSquareGenerator() {
    squares.forEach(square => {
      square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

function moveMole() {
    moleTimerId = setInterval(randomSquareGenerator, 500)
}

function countDown() {
    currentTimeLeft=currentTimeLeft-1
    timeLeft.textContent = currentTimeLeft
  
    if(currentTimeLeft === 0 ){
        clearInterval(timerId)
        clearInterval(moleTimerId)
        alert('GAME OVER!!!! Your final score is: ' + result)
        timeLeft.textContent = 60
        currentTimeLeft = timeLeft.textContent;
    }
}

start.addEventListener('click',()=>{
    moveMole();
    timerId = setInterval(countDown, 1000)
})

reset.addEventListener('click',function(){
    clearInterval(timerId)
    clearInterval(moleTimerId)
    timeLeft.textContent = 60
    currentTimeLeft = timeLeft.textContent;
    squares.forEach(square => {
        square.classList.remove('mole')
    })
})