import fs from "node:fs/promises"
import Handlebars from "handlebars"

const subdomains = [
    ["comms", "https://forms.gle/HpgxCp17xgTKxsDz5"],
    ["commissions", "https://forms.gle/HpgxCp17xgTKxsDz5"],
    ["discord", "https://discord.gg/QG7QGhDeq9"],
    ["bluesky", "https://bsky.app/profile/holipop.art"],
    ["bsky", "https://bsky.app/profile/holipop.art"],
    ["tumblr", "https://www.tumblr.com/holipop-art"],
    ["github", "https://github.com/holipop"],
    ["patreon", "https://www.patreon.com/c/holipop"],
    ["kofi", "https://ko-fi.com/holipop"],
]

try {
    const template = Handlebars.compile(
        /* html */`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="shortcut icon" href="/src/assets/favicon.png">
                <link rel="stylesheet" href="/src/style.css" />
                <script type="module" src="/src/main.js"></script>

                <meta http-equiv="refresh" content="0; url={{link}}">

                <title>holipop.art &centerdot; Redirecting...</title>
            </head>
        </html>`, 
        { encoding: "utf-8" }
    )

    for (const entry of subdomains) {
        const [name, link] = entry

        fs.writeFile(`${name}.html`, template({ link }))
    }
} catch {
    console.error(err)
}