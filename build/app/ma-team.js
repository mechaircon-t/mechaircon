/*! Built with http://stenciljs.com */
const { h } = window.App;

class MechTeam {
    constructor() {
        this.team = [
            [{
                    name: 'Er.Ehsan Ahmad',
                    about: `Mechanical Engineer working as a HVAC Engineer. Also Associate Member, ISHRAE `,
                    desig: '',
                    link: 'https://bulma.io/images/placeholders/1280x960.png',
                    photo: ''
                },
                {
                    name: 'Er. Md.Tabrez Khan',
                    about: `Mechanical Engineer, Annamalai University Alumni, with expertise in industrial automation and HVAC.`,
                    desig: '',
                    link: 'assets/team/tabrez.jpg',
                    photo: ''
                },
                {
                    name: 'Er. Hozaifa Ahmad',
                    about: `Mechanical Engineer working as a project engineer and also Master of Technology in Industrial Engineer.`,
                    desig: '',
                    link: 'https://bulma.io/images/placeholders/1280x960.png',
                    photo: ''
                }],
            [
                {
                    name: 'Er. Md. Sanaullah',
                    about: 'Electrical Engineer working as a HVAC and Electrical department.',
                    desig: '',
                    link: 'https://bulma.io/images/placeholders/1280x960.png',
                    photo: ''
                },
                {
                    name: 'Er. Ravi Ranjan Singh',
                    about: 'Electrical Engineer working as a Marketing Executive.',
                    desig: '',
                    link: 'https://bulma.io/images/placeholders/1280x960.png',
                    photo: ''
                },
                {
                    name: 'Er. Abhishek Singh',
                    about: 'Mechanical Engineer working as a Project Engineer.',
                    desig: '',
                    link: 'https://bulma.io/images/placeholders/1280x960.png',
                    photo: ''
                }
            ]
        ];
    }
    render() {
        return (h("div", { class: " has-background-light" },
            h("div", { class: "container" },
                h("section", { class: "section content" },
                    h("h1", { class: "has-text-centered" }, "Our Management")),
                this.team.map(memberArr => h("section", { class: "columns" }, memberArr.map(member => h("div", { class: "card column" },
                    h("div", { class: "card-image" },
                        h("figure", { class: "image is-4by3" },
                            h("img", { src: member.link, alt: "Placeholder image" }),
                            h("a", { class: "icon" },
                                h("i", { class: "fas fa-globe" })))),
                    h("div", { class: "card-content" },
                        h("div", { class: "media" },
                            h("div", { class: "media-content" },
                                h("p", { class: "title is-4" }, member.name),
                                h("p", { class: "subtitle is-6" }, member.desig))),
                        h("div", { class: "content" },
                            member.about,
                            h("br", null))))))))));
    }
    static get is() { return "ma-team"; }
    static get style() { return ".card.column{\n    margin:20px;\n}"; }
}

export { MechTeam as MaTeam };
