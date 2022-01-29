const img1DiceOne = document.querySelector('.img1')
const img2DiceTwo = document.querySelector('.img2')
const message = document.querySelector(".container h1")

const diceOne = Math.floor(Math.random() * 6) + 1
const diceTwo = Math.floor(Math.random() * 6) + 1

if(diceOne > diceTwo) {
    message.textContent="Player 1 Wins!"
} else if (diceTwo > diceOne) {
    message.textContent="Player 2 Wins!"
} else {
    message.textContent="Draw!"
}

const nameDiceOne = 'images\\dice'+diceOne+'.png'
const nameDiceTwo = 'images\\dice'+diceTwo+'.png'

img1DiceOne.setAttribute("src", nameDiceOne)
img2DiceTwo.setAttribute("src", nameDiceTwo)