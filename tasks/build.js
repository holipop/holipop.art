import fs from "node:fs/promises"
import showdown from "showdown"
import Handlebars from "handlebars"

const PROPERTIES_REGEX = /^-{3}\n({\n[\s\S]+})\n-{3}/gm

const converter = new showdown.Converter()

try {
    const dir = await fs.readdir("./articles")
    const template = Handlebars.compile(await fs.readFile("./templates/article.hbs", { encoding: "utf-8" }))

    for (const file of dir) {
        const data = await fs.readFile(`./articles/${file}`, { encoding: "utf-8" })
        
        const properties = JSON.parse(data.match(PROPERTIES_REGEX)[0].slice(3, -3))
        const markdown = data.replace(PROPERTIES_REGEX, "").trim()

        properties.content = converter.makeHtml(markdown)

        fs.writeFile(`./blog/${file.replace(".md", ".html")}`, template(properties))
    }
} catch (err) {
    console.error(err)
}