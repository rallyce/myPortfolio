// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#000000",
    LinkHighlightColor: "#FFFFFF"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello, my name is",
    name: "Omar Zuniga Calderon",
    basedLocation: "Raleigh, NC",
    resumeLink: "https://docs.google.com/document/d/18VFRVp2Pek7ri8clE7904OlqX1cOsZMY/edit", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/myname.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: false // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/me.jpeg'
}

const socialMediaLinks = {
    github: "https://github.com/rallyce",
    linkedin: "https://www.linkedin.com/in/omar-yesid-zu%C3%B1iga-calderon-636a9a283/",
    stackoverflow: "",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I'm a Mecatronic engineer and a software development student. I am a very responsible person, currently working on personal projects to grow profesionally so that will help me in my laboral career.",
        "I am very independent, I like to work both in teamwork and by myself, communication helps a lot in very complex objects and it's something I am improving continuosly. Also a like programming so much, as I learn quicly, I have knowledge about many topics like electronics, working with microcontrollers. mathematics, management, etc. I focus mainly in backend and electronics with embedded, but I also work with fron-end, Devops."
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        "C",
        "Javascript",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
    ],
    frameworks: [
        "Spring Boot",
        "Spring Cloud",
        "Keycloak",
        "Microservices"
    ],
    systemos: [
        "Linux",
        "Windows",
        "Docker",
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Maintenance assistant",
        company: {
            name: "Polybol S.A.S",
            link: "https://polybol.com/"
        },
        duration: "Nov 2022 - May 2023",
        bulletPoints: [
            "•	Using Microsoft SharePoint to create a small database for warehouse inventory management",
            "•	Creation of routines for managing the state of the company's machines",
            "•	Daily reports on daily maintenance activities"
        ],
        hashtags: [
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Votes counting System",
        yearCompleted: "2023",
        description: "A desktop app builded with vanilla Java. It is a vote counting system to count votes from an electoral day in an educational institution. It has an dynamic and good-looking interface to the user, so It can be managed in easy ways, while provides many functions like authentication for login.",
        techStack: "Java, Java Swing, MySQL", 
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/rallyce/Sistema_Votacion_JuanJoseNieto"
            },
        ],
        imageLink: "images/loginB.png",
        alignLeft: false
    },
    {
        projectName: "Inventory manager webapp",
        yearCompleted: "2024",
        description: "A personal inventory manager to arrange my daily things like an agenda and things to buy, get for my electronic projects, etc. Also created to understand the APIs in backend develpoment",
        techStack: "Java, Spring Boot, Spring Security, Vuejs, MySQL, JWT authentication",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/rallyce/Petroleum-VSC"
            }
        ],
        imageLink: "images/dashboardB.png",
        alignLeft: true
    },
    {
        projectName: "SENA registration project - Sample",
        yearCompleted: "2021",
        description: "A registration software to make reports from technicians, assistants and administrator to control de workshop management.",
        techStack: "Java, Java Swing, MySQL",
        links: [

        ],
        imageLink: "images/Administrador.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/rallyce?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently I'm seeking software development positions/internships in IT, electronics or web area",
            "I am interested in collaborate in open source projects or any project to make contacs and improve my soft skills in teamwork and communication enviroment"
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "ozunigacalderon@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "I'll respond as soon as I can"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}