const Data = [
    {
        id: 1,
        category: "education",
        icon: "icon-graduation",
        year: "since 2019",
        title: "Master Expert IT",
        company: "Epitech Technology",
        localisation: "Paris, France 🇫🇷",
        desc: (
            <div>
                <ul className="timeline__list">
                    <li><span className="timeline__important">Bachelor's degree</span> obtained in 2022</li>
                    <li>Advanced computer programming and development skills</li>
                    <li>Practical experience in designing and implementing projects in a team
                    environment</li>
                    <li>Ability to adapt quickly to new technologies and to learn continuously</li>
                </ul>
            </div>
        ),
        skills: ["fa-solid fa-c", "fa-brands fa-python", "fa-brands fa-react", "fa-brands fa-vuejs", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-node", "fa-solid fa-database"],
    },
    {
        id: 2,
        category: "education",
        icon: "icon-graduation",
        year: "2022 - 2023",
        title: "Master of Science (Artificial Intelligence)",
        company: "University of Kent",
        localisation: "Canterbury, United Kingdom 🇬🇧",
        desc: (
            <div>
                <ul className="timeline__list">
                    <li><span className="timeline__important">Master thesis</span> "AirBnB Review Analyser Natural Language Processing"</li>
                    <li>Mastery of fundamental concepts of artificial intelligence and advanced modelling and programming techniques</li>
                    <li>Knowledge of key areas of AI such as machine learning, deep learning, natural
                    language processing, etc.</li>
                    <li>Mathematical and statistical skills for data analysis and AI algorithm design</li>
                </ul>
            </div>
        ),
        skills: ["fa-brands fa-python", "fa-brands fa-java"],
    },
    {
        id: 3,
        category: "education",
        icon: "icon-graduation",
        year: "2019",
        title: "High School Scientific Diploma",
        company: "Lycée Camille Sée",
        localisation: "Colmar, France 🇫🇷",
    },
    {
        id: 4,
        category: "experience",
        icon: "icon-briefcase",
        year: "since 2021",
        title: "Freelance Developer",
        company: "Freelancer",
        localisation: "Remote",
        desc: (
            <div>
                <ul className="timeline__list">
                    <li>Computer maintenance of a React web application (since 2022)</li>
                    <li>Creation of a website in React for a pneumology practice (October 2021)</li>
                </ul>
            </div>
        ),
        skills: ["fa-brands fa-react", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-node", "fa-solid fa-database"],
    },
    {
        id: 5,
        category: "experience",
        icon: "icon-briefcase",
        year: "since 2023",
        title: "Full Stack Developer",
        company: "Lasa",
        localisation: "Lyon, France 🇫🇷",
        desc: (
            <div>
                <ul className="timeline__list">
                    <li>Participate in the development of internal acoustic and vibration engineering tools, LASA R&D innovations, prospecting and the company website.</li>
                </ul>
            </div>
        ),
        skills: ["fa-brands fa-python", "fa-solid fa-database"],
    },
    {
        id: 6,
        category: "experience",
        icon: "icon-briefcase",
        year: "2021 - 2022",
        title: "Software Developer",
        company: "SNCF Réseau",
        localisation: "Strasbourg, France 🇫🇷",
        link: "https://drive.google.com/file/d/1Fwa1kanvxFtZZeduspQHw7tpPi0ohflM/view",
        messageLink: "recommendation letter",
        desc: (
            <div>
                <ul className="timeline__list">
                    <li>Adding functionality and fixing bugs to an internal project order application using
                    Microsoft Office 365 technologies</li>
                    <li>Redesign of the application using SQL and .NET technologies</li>
                </ul>
            </div>
        ),
        skills: ["fa-brands fa-microsoft", "fa-solid fa-database"],
    },
    {
        id: 7,
        category: "experience",
        icon: "icon-briefcase",
        year: "2020",
        title: "Full Stack Developer",
        company: "Privilèges d'Entreprises",
        localisation: "Esch-sur-Alzette, Luxembourg 🇱🇺",
        desc: (
            <div>
                <ul className="experience-list">
                    <li>Creation of a website in React</li>
                    <li>Development of a dematerialized ticket system in Javascript</li>
                    <li>Development of a barcode generator in Javascript</li>
                    <li>Development of a newsletter system with Node and MongoDB</li>
                </ul>
            </div>
        ),
        skills: ["fa-brands fa-react", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-node", "fa-solid fa-database"],
    },
];

export default Data;