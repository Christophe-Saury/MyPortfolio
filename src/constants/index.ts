import project1 from "../assets/projects/appCapteurSiteWeb.png";
import project2 from "../assets/projects/tailoredTouristTour.png";
import project3 from "../assets/projects/sebra.png";
import project4 from "../assets/projects/yokaiCardGame.png";
import project5 from "../assets/projects/seoulSemesterMozaic.png";
import project6 from "../assets/projects/beautyProductsScanner.png";

export const HERO_CONTENT = {
  EN: `I am a French-American full stack developer with an interest in serving users by building robust and scalable web applications. With 4 years of hands-on experience through my school projects and internships, I have honed my skills in back-end technologies like Java, Python, PHP and MySQL, as well as front-end technologies like React, Tailwind and Typescript. My goal is to keep improving my skills while creating innovative solutions that drive business growth and deliver exceptional user experiences.`,
  FR: `Je suis un développeur full stack franco-américain avec un intérêt pour servir les utilisateurs en créant des applications web robustes et évolutives. Avec 4 ans d'expérience pratique à travers mes projets scolaires et mes stages, j'ai affiné mes compétences dans les technologies back-end comme Java, Python, PHP et MySQL, ainsi que dans les technologies front-end comme React, Tailwind et Typescript. Mon objectif est de continuer à améliorer mes compétences tout en créant des solutions innovantes qui stimulent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.`,
};



// text to change if i add an about me section, talk about my interests in other cultures and languages?
export const ABOUT_TEXT = {
  EN: `I’m passionate about learning new languages and exploring cultural differences, which led me to study abroad in Prague and Seoul. During my second year at ISEP, I spent a semester in Prague, where I discovered my love for coding. Staying in dorms with experienced developers from around the world, I gained valuable insights and help with learning Java. Their support helped me overcome challenges and sparked my passion for coding, which ultimately led me to choose it as my major at ISEP. I then went on to do an internship in the French Navy as a Web Developer and studied UX Design during my semester in Seoul.`,
  FR: `Je suis passionné par l'apprentissage de langues étrangères et l'exploration des différences culturelles, ce qui m'a conduit à étudier à Prague et à Séoul. Pendant ma deuxième année à ISEP, j'ai passé un semestre à Prague, où j'ai découvert ma passion pour la programmation. En restant dans des dortoirs avec des développeurs expérimentés du monde entier, j'ai reçu de l'aide pour apprendre le Java. Ce soutien m'a aidé à développer mon intérêt pour la programmation, ce qui m'a amené à choisir la programmation comme ma majeure. J'ai pu ensuite continuer en faisant un stage à la Marine Nationale en tant que développeur web et en apprenant l'UX Design pendant mon semestre à Seoul.`,
};


export const EXPERIENCES = {
  EN: [
    {
      year: "2024 - Present : (6 Months)",
      role: "IT Project Lead",
      company: "Devoteam",
      description: `Lead initiatives aimed at securing computer data flows for Carrefour Banque, ensuring compliance with GDPR regulations and mitigating any potential legal issues.`,
      technologies: ["Priority Management", "Communication"],
    },
    {
      year: "2022 - 2023 : (6 Months)",
      role: "Développeur Web Full Stack",
      company: "Marine Nationale",
      description: `Built a web application to manage the 400,000+ yearly access requests to the Brest Naval Base. 
Addressed a security concern of the naval base.
Improved the management and oversight of the demand validation process. 
App is adaptable to the 19 other bases of the French Navy.
The app was made by the demand of Fleet Vice Admiral COEFFE, Commander of the Brest Naval Base.`,
      technologies: ["PHP", "Javascript", "mySQL"],
    },
    {
      year: "2021 - 2022 : (15 Months)",
      role: "IT Support and customer service contractor",
      company: "Numéris (Intérim Agency)",
      description: `Effectued level 1 IT support missions for AXA and IDEX, as well as customer service missions for other companies.`,
      technologies: ["Communication"],
    },
    {
      year: "2021 : (5 Months)",
      role: "Crew Member",
      company: "McDonald's",
      description: `Worked in a team to cook and serve food to customers.
Worked the grill, assembled burgers, and handled frying as part of my kitchen responsibilities.`,
      technologies: ["Working under pressure"],
    },
  ],
  FR: [
    {
      year: "2024 - Présent : (6 Mois)",
      role: "Chef de Projet IT",
      company: "Devoteam",
      description: `Direction d'initiatives visant à sécuriser les flux de données informatiques pour Carrefour Banque, en veillant au respect du règlement GDPR et en atténuant les problèmes juridiques potentiels.`,
      technologies: ["Gestion des priorités", "Communication"],
    },
    {
      year: "2022 - 2023 : (6 Mois)",
      role: "Développeur Web Full Stack",
      company: "Marine Nationale",
      description: `Développement d'une application web pour gérer plus de 400 000 demandes annuelles d'accès à la base navale de Brest. Ce projet a permis de résoudre une problématique de sécurité majeure tout en améliorant la gestion et le suivi du processus de validation des demandes. L'application, conçue pour être adaptable aux 19 autres bases de la Marine française, a été réalisée à la demande de l'amiral de flotte COEFFE, commandant de la base navale de Brest.`,
      technologies: ["PHP", "Javascript", "mySQL"],
    },
    {
      year: "2021 - 2022 : (15 Mois)",
      role: "Contractor de support IT et service client",
      company: "Numéris (Agence Intérim)",
      description: `Effectué des missions de support IT de niveau 1 pour AXA et IDEX, ainsi que des missions de service client pour d'autres entreprises.`,
      technologies: ["Communication"],
    },
    {
      year: "2021 : (5 Mois)",
      role: "Membre de l'équipe",
      company: "McDonald's",
      description: `Travaillé en équipe pour cuisiner et servir des repas aux clients.
Travaillé au grill, assemblé des burgers et géré la friture dans le cadre de mes responsabilités de cuisine.`,
      technologies: ["Travail sous pression"],
    },
  ],
};





export const EDUCATION = {
  EN:[
  {
    year: "2019 - 2024 : Paris, France",
    role: "Computer Science Student",
    company: "ISEP",
    description: `Engineering school in Paris, France. Learned various subjects linked to Computer Science, Electronics and Engineering.`,
    technologies: ["Java","Javascript", "Python", "PHP", "MySQL", "Electronics"],
  },
  {
    year: "2023 (6 months) : Seoul, South Korea",
    role: "Exchange Student",
    company: "Sogang university",
    description: `Exchange semester at Sogang University in Seoul, South Korea as part of my 5th year of study at ISEP.`,
    technologies: [ "Java","UI/UX Design", "Machine Learning", "Python" ],
  },
  {
    year: "2021 (6 months) : Prague, Czech Republic",
    role: "Exchange Student",
    company: "CVUT",
    description: `Exchange semester at Czech University of Technology in Prague, Czech Republic as part of my 2th year of study at ISEP.`,
    technologies: ["Java", "Networks", "Maths"],
  },],


  FR: [
    {
      year: "2019 - 2024 : Paris, France",
      role: "Étudiant en Informatique",
      company: "ISEP",
      description: `École d'ingénieurs à Paris, France. Acquis des connaissances dans divers domaines liés à l'informatique, l'électronique et l'ingénierie.`,
      technologies: ["Java","Javascript", "Python", "PHP", "MySQL", "Électronique"],
    },
    {
      year: "2023 (6 mois) : Séoul, Corée du Sud",
      role: "Étudiant en échange",
      company: "Université Sogang",
      description: `Semestre d'échange à l'Université Sogang à Séoul, Corée du Sud dans le cadre de ma 5ème année d'études à l'ISEP.`,
      technologies: [ "Java","Conception UI/UX", "Apprentissage automatique", "Python" ],
    },
    {
      year: "2021 (6 mois) : Prague, République tchèque",
      role: "Étudiant en échange",
      company: "CVUT",
      description: `Semestre d'échange à l'Université technique de Prague en République tchèque dans le cadre de ma 2ème année d'études à l'ISEP.`,
      technologies: ["Java", "Réseaux", "Mathématiques"],
    },
  ],
  };


export const PROJECTS = {
  EN: [
    {
      title: "IOT solution for employee health",
      image: project1,
      description:
        "Built sensors that can track the temperature, noise and pollution of an area. Built a web site to allow a construction company to manage different work sites, assign workers to these sites and track the sensor data of the different sites to help maintain worker safety.",
      technologies: ["PHP", "Javascript", "MySQL", "Electronics", "C"],
    },
    {
      title: "Tailored Tourist Tours",
      image: project2,
      description:
        "Built a website that makes an itinerary for a tourist visiting France by using a nearest insertion algorithm over a monuments data api for France.",
      technologies: ["Java", "Javascript", "MySQL"],
    },
    {
      title: "SEBRA - UI/UX Design Project",
      image: project3,
      description:
        "Designed an app that centralizes user data to help the user track data related to their goals. Ex : Calorie Intake, Step Count and Sleep Score, for a user trying to improve his fitness level. The design project was made while working in an international team for my UX Design Class in South Korea.",
      technologies: ["UI/UX Design"], 
    },
    {
      title: "Beauty Products Scanner",
      image: project6,
      description:
        "Designed a web app that scans Beauty Products and gives its price and user ratings as well as providing recommendations for the best products in each category based on the ratings.",
      technologies: ["UI/UX Design"], 
    },
    {
      title: "Yokai Game",
      image: project4,
      description:
        "Made the Yokai card game using Java and JavaFX for a school project.",
      technologies: ["Java"],
    },
    {
      title: "Seoul Semester Mozaic",
      image: project5,
      description:
        "Made a mozaic made of pictures of my semester in Seoul to represent my time spent there. Was made for a weekly project on data visualization and photo collages in creative coding. ",
      technologies: ["Processing", "Creative Coding"],
    },
  ],

  FR: [
    {
      title: "Solution IOT pour la santé des employés",
      image: project1,
      description:
        "Conçu des capteurs pour suivre la température, le bruit et la pollution d'une zone. Conçu un site web pour permettre à une entreprise de construction de gérer différents chantiers, d'affecter des travailleurs à ces chantiers et de suivre les données des capteurs des différents chantiers pour aider à maintenir la sécurité des travailleurs.",
      technologies: ["PHP", "Javascript", "MySQL", "Électronique", "C"],
    },
    {
      title: "Visites touristiques personnalisées",
      image: project2,
      description:
        "Conçu un site web qui crée un itinéraire pour un touriste visitant la France en utilisant un algorithme d'insertion le plus proche sur une API de données de monuments pour la France.",
      technologies: ["Java", "Javascript", "MySQL"],
    },
    {
      title: "SEBRA - Projet de conception UI/UX",
      image: project3,
      description:
        "Conception d'une application qui centralise les données de l'utilisateur pour l'aider à suivre les données liées à ses objectifs. Ex : Apport calorique, Compte de pas et Score de sommeil, pour un utilisateur qui essaie d'améliorer son niveau de forme physique. Le projet de conception a été réalisé en travaillant dans une équipe internationale pour ma classe de conception UX en Corée du Sud.",
      technologies: ["Conception UI/UX"], 
    },
    {
      title: "Analyseur de Produits de Beauté",
      image: project6,
      description:
        "Conçu une application web qui analyse les produits de beauté et affiche leur prix et les notes des utilisateurs, ainsi que des recommandations pour les meilleurs produits dans chaque catégorie en fonction des notes.",
      technologies: ["Conception UI/UX"], 
    },
    {
      title: "Jeu Yokai",
      image: project4,
      description:
        "Conçu le jeu de cartes Yokai en utilisant Java et JavaFX pour un projet scolaire.",
      technologies: ["Java"],
    },
    {
      title: "Mosaïque du semestre à Séoul",
      image: project5,
      description:
        "Conçu une mosaïque faite de photos de mon semestre à Séoul pour représenter le temps que j'y ai passé. A été réalisé pour un projet hebdomadaire sur la visualisation de données et les collages de photos en codage créatif. ",
      technologies: ["Processing", "Creative Coding"],
    },
  ],
};



export const CONTACT = {
  address: "92130 Issy Les Moulineaux, Ile de France, France",
  phoneNo: "+336 95 50 28 54",
  email: "christophesaury23@gmail.com",
};
