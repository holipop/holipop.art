// holipop.art
// Sunny Holiday 2022

(async () => {
    const context = {
        items: {
            home:    { name: "home",         href: "index.html" },
            comms:   { name: "commissions",  href: "comms.html" },
            gallery: { name: "gallery",      href: "gallery.html" },
            games:   { name: "games",        href: "games.html" },
            about:   { name: "about",        href: "about.html" },
        },
        selected: hbs.dataset.selected
    }

    Handlebars.registerPartial('nav', await getTemplate('templates/nav.hbs'))
    Handlebars.registerHelper({
        eq: (v1, v2) => v1 === v2,
        ne: (v1, v2) => v1 !== v2,
        lt: (v1, v2) => v1 < v2,
        gt: (v1, v2) => v1 > v2,
        lte: (v1, v2) => v1 <= v2,
        gte: (v1, v2) => v1 >= v2,
        not: pred => !pred,
        and () {return Array.prototype.every.call(arguments, Boolean);},
        or () {return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);}
    });

    const template = Handlebars.compile(hbs.innerHTML)
    $('#hbs').after(template(context))
})()

async function getTemplate(path) {
    const response = await fetch(path)
    return await response.text()
    //return Handlebars.compile(content)
}