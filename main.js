class HoliSidebar extends HTMLElement {

    static observedAttributes = ["tab"]

    constructor () {
        super()
    }

    connectedCallback () {
        const shadow = this.attachShadow({ mode: "open" })
        shadow.innerHTML = /* html */`
            <div class="sidebar">
                Testing
            </div>
        `
    }

}

customElements.define("holi-sidebar", HoliSidebar)