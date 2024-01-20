// holipop.art
// Sunny Holiday 2022

main()
function main () {

    window.addEventListener('mousedown', event => {
        const BONK_LENGTH = 50 // ms
        const img = document.querySelector('.bonk-wip>img')
        img.src = "../images/construction_bunny_bonk.png"

        setTimeout(() => {
            img.src = "./images/construction_bunny.png"
        }, BONK_LENGTH)
    })

}