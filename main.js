// holipop.art
// Sunny Holiday 2022

// Button Shine

/**
 * @param {MouseEvent} event 
 */
function handleMouseShine (event) {
    /** @type {HTMLElement} */
    const target = event.target

    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    target.style = `--mouse-x: ${x}; --mouse-y: ${y};`
}

/** @type {HTMLElement[]} */
const buttons = document.querySelectorAll(".js-shine")
for (const button of buttons) {
    button.addEventListener("mousemove", handleMouseShine)
}