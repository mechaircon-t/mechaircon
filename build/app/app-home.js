/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("ma-header", null)));
    }
    static get is() { return "app-home"; }
    static get style() { return ""; }
}

class MechHeader {
    constructor() {
        this.index = 0;
        this.carouselImgs = [
            'assets/img/hvac1.jpg',
            'assets/img/hvac2.jpg',
            'assets/img/hvac3.jpg',
        ];
    }
    componentDidLoad() {
        console.log("rerendering");
        this.clear = setInterval(() => {
            console.log("incrementing index");
            this.index = this.index === this.carouselImgs.length - 1 ? 0 : this.index + 1;
        }, 5000);
    }
    componentDidUnload() {
        clearInterval(this.clear);
    }
    render() {
        return (h("section", { class: "hero is-dark is-bold is-fullheight" },
            h("div", { class: "hero-carousel slide-active" },
                h("ul", { class: 'carousel-container' },
                    h("li", null,
                        h("img", { class: "is-background", src: this.carouselImgs[this.index], alt: "" })))),
            h("div", { class: "hero-head" }),
            h("div", { class: "hero-body" },
                h("div", { class: "container has-text-centered" },
                    h("figure", null,
                        h("img", { src: "assets/img/gear.svg", alt: "Logo" })),
                    h("p", { class: "title" }, "Design Consulting Execution"),
                    h("p", { class: "subtitle" }, "Complete HVAC Solution"))),
            h("div", { class: "hero-foot" })));
    }
    static get is() { return "ma-header"; }
    static get properties() { return {
        "carouselImgs": {
            "state": true
        },
        "clear": {
            "state": true
        },
        "index": {
            "state": true
        }
    }; }
    static get style() { return ".hero-carousel{\n    position: absolute;\n    overflow: hidden;\n    width: 100vw;\n    height: 100vh;\n}\n\n.carousel-container{\n    margin: 0;\n    padding: 0;\n}\n\n.carousel-container li{\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    text-align: center;\n}\n\n.carousel-container li img{\n   width:100%;\n   opacity: 0.5;\n}"; }
}

export { AppHome, MechHeader as MaHeader };
