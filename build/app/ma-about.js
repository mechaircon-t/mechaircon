/*! Built with http://stenciljs.com */
const { h } = window.App;

class MechAbout {
    render() {
        return (h("div", null,
            h("section", { class: "section has-background-light" },
                h("article", { class: "container content has-text-justified" },
                    h("h1", null, "About Us"),
                    h("p", null, "We are a leading Air conditioning (HVAC) and Air cooling solution provider to the industry, commercial building and domestic users. We take proud in our reliable and integrated capability of delivering range of services spanning the entire range of air conditioning systems from VRV Ductable, Split AC to Central plants for industry as well as commercial and domestic application. Mech Aircon pvt.ltd. is renowned for successfully delivering large complex business and technology integration program, within the constraints of time, quality and budget."),
                    h("p", null, "Today the company provides a wide range of services and complete solution for any environmental need, no matter how large or small. Mech Aircon pvt.ltd. Has design capabilities, can supply and install systems perfectly to our customer's requirements."))),
            h("br", null),
            h("section", null,
                h("article", { class: "container content has-text-right" },
                    h("h1", null, "Our Mission"),
                    h("p", null, "\u201CMech Aircon\u201D is a quality driven company and quality stands as one of the pillars to our firms success. Mech Aircon has built a reputation for itself as one of the leading contracting companies in the market landscape through constantly improving performance and adding immense value to the projects it undertakes. The company has been seeing an exponential growth trajectory. We look forward to a bright future ahead for the firm."))),
            h("section", { class: "section" })));
    }
    static get is() { return "ma-about"; }
    static get style() { return ""; }
}

export { MechAbout as MaAbout };
