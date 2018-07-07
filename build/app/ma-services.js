/*! Built with http://stenciljs.com */
const { h } = window.App;

class MechServices {
    render() {
        return (h("div", { class: "content" },
            h("section", { class: "section has-background-light" },
                h("article", null,
                    h("h1", null, "Our Services"),
                    h("p", null,
                        h("ul", null,
                            h("li", null, "Anual maintenance contract for Chillers, VRF,VRV, Ductable and splits"),
                            h("li", null, "Installation of VRV, Chillers, VRF, Ductable and splits"),
                            h("li", null, "Design build solutions"))))),
            h("section", { class: "section" },
                h("article", null,
                    h("h1", null, "Application Area"),
                    h("ul", null,
                        h("li", null, "Panel AC "),
                        h("li", null, " VRV/VRF ,Chiller Plant"),
                        h("li", null, " Ductable / Package Plant"),
                        h("li", null, "Industrial Air Conditioning"),
                        h("li", null, "Industrial Air Washer"),
                        h("li", null, "Cold Chamber"),
                        h("li", null, "Clean Room Job"),
                        h("li", null, "Climate Control"),
                        h("li", null, "Comfort Air Conditioning"))))));
    }
    static get is() { return "ma-services"; }
    static get style() { return ".full-screen{\n    width:100%;\n    height:100%;\n}"; }
}

export { MechServices as MaServices };
