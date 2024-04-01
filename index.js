// holipop.art
// Sunny Holiday 2022

window.addEventListener('click', bonkAnimation)
window.addEventListener('click', updateScore)

function bonkAnimation () {
    const BONK_LENGTH = 50 // ms
    const img = document.querySelector('[data-bonk]')
    img.src = './images/construction_bunny_bonk.png'

    setTimeout(() => {
        img.src = './images/construction_bunny.png'
    }, BONK_LENGTH)
}

let score = 0
function updateScore () {
    const scoreNumber = document.querySelector('[data-score]')

    score++
    scoreNumber.innerHTML = score
}