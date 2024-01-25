// holipop.art
// Sunny Holiday 2022

main()
function main () {

    let score = 0
    const counter = document.querySelector('[data-score]')

    window.addEventListener('click', event => {
        const BONK_LENGTH = 50 // ms
        const img = document.querySelector('.bonk-wip>img')
        img.src = "../images/construction_bunny_bonk.png"

        score++
        counter.innerHTML = score + ""

        const frenzyChance = (score % 50) + 1 / 250
        console.log(Math.random() >= frenzyChance)

        setTimeout(() => {
            img.src = "./images/construction_bunny.png"
        }, BONK_LENGTH)
    })

}