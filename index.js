// holipop.art
// Sunny Holiday 2022

async function main () {
    const response = await fetch('./templates/head.hbs')
    const content = await response.text()
    const template = Handlebars.compile(content)

    const data = {
        page: "Home"
    }
    console.log(template(data))
}

main()

async function getTemplate(path) {
    const response = await fetch(path)
    const content = await response.text()
    return Handlebars.compile(content)
}