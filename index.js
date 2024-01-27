// holipop.art
// Sunny Holiday 2022

$(window).on('click', bonkAnimation)

function bonkAnimation () {
    const BONK_LENGTH = 50 // ms
    const img = $('[data-bonk]')[0]
    img.src = './images/construction_bunny_bonk.png'

    setTimeout(() => {
        img.src = './images/construction_bunny.png'
    }, BONK_LENGTH)
}