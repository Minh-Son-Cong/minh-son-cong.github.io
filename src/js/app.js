/* sweetScroll load, particles.js, navbar & FR/EN i18n */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof SweetScroll === "function") {
    new SweetScroll({
      offset: -64
    });
  }

  if (document.getElementById("particles-js") && typeof particlesJS === "function") {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  }

  var translations = {
    fr: {
      "page.title": "Minh-Son CONG | Portfolio",
      "nav.about": "À propos",
      "nav.parcours": "Parcours",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.interests": "Centres d'intérêt",
      "nav.contact": "Contact",
      "hero.subtitle": "Développeur - Étudiant en BUT Informatique - Parcours DACS",
      "hero.cv": "Mon CV",
      "hero.contact": "Me contacter",
      "about.title": "À propos",
      "about.description": "Étudiant en deuxième année de BUT Informatique à l’IUT de Lille, spécialisé dans le déploiement d’applications communicantes et sécurisées. Je possède des compétences en administration de systèmes Linux, gestion de bases de données, utilisation de Git et Docker, ainsi qu’en conception et développement d’applications, notamment en Java. Passionné par le DevOps, l’administration systèmes et les réseaux, je recherche un stage de 8 à 10 semaines à partir du 5 avril 2027.",
      "parcours.title": "Parcours",
      "parcours.subtitle": "Mon parcours scolaire et universitaire jusqu'au BUT Informatique parcours DACS.",
      "parcours.s3.badge": "Actuellement · 2ème année",
      "parcours.s3.title": "IUT de Lille — Parcours DACS",
      "parcours.s3.desc": "Spécialisation en Déploiement d'Applications Communicantes et Sécurisées : administration systèmes Linux, réseaux, conteneurisation Docker, bases de données et développement Java.",
      "parcours.s2.badge": "BUT Informatique · 1ère année",
      "parcours.s2.title": "IUT de Lille — 1ère année",
      "parcours.s2.desc": "Acquisition des fondamentaux de l'informatique : algorithmique, programmation orientée objet en Java, bases de données relationnelles, développement web et systèmes Linux.",
      "parcours.s1.badge": "Lycée",
      "parcours.s1.title": "Lycée d'élite : Chu Van An",
      "parcours.s1.desc": "Formation secondaire exigeante axée sur les sciences, la rigueur analytique et les mathématiques, préparant aux études supérieures en informatique.",
      "skills.title": "Compétences",
      "skills.subtitle": "Savoir-faire techniques et qualités relationnelles développés au fil de ma formation et de mes projets.",
      "skills.tech.title": "Compétences techniques",
      "skills.cat.network": "Réseaux",
      "skills.cat.sys": "Systèmes / Virtualisation",
      "skills.cat.front": "Front-end",
      "skills.cat.back": "Back-end",
      "skills.cat.db": "Bases de données",
      "skills.cat.tools": "Outils",
      "skills.cat.ops": "Ops",
      "skills.soft.title": "Compétences relationnelles",
      "skills.soft.s1.title": "Travail en équipe",
      "skills.soft.s1.desc": "Collaboration efficace sur des projets de groupe (SAÉ), partage des tâches et entraide technique.",
      "skills.soft.s2.title": "Rigueur & Résolution de problèmes",
      "skills.soft.s2.desc": "Analyse méthodique des incidents réseau ou applicatifs et recherche de solutions fiables.",
      "skills.soft.s3.title": "Autonomie & Adaptabilité",
      "skills.soft.s3.desc": "Capacité à apprendre rapidement de nouveaux outils, environnements Linux et technologies DevOps.",
      "languages.title": "Langues",
      "languages.en.name": "Anglais",
      "languages.en.level": "Intermédiaire - B2",
      "languages.fr.name": "Français",
      "languages.fr.level": "Intermédiaire - B2",
      "languages.vi.name": "Vietnamien",
      "languages.vi.level": "Courant",
      "projects.title": "Projets",
      "projects.p1.title": "SAÉ 2.2 : Exploration algorithmique",
      "projects.p1.stack": "SceneBuilder · Java · JavaFX · UML · Figma",
      "projects.p1.desc": "Création d'un assistant personnel de voyage multimodal (5 villes, critères CO2, Prix, Temps) intégrant l'algorithme KPCC, la modélisation UML/Graphe, une maquette Figma et une interface JavaFX conçue avec SceneBuilder.",
      "projects.p2.title": "Infrastructure & Déploiement Conteneurisé",
      "projects.p2.stack": "Docker · Linux · Nginx · SSH",
      "projects.p2.desc": "Mise en place et sécurisation d'environnements applicatifs multi-services avec Docker, reverse proxy Nginx et automatisation du déploiement sous Linux.",
      "projects.view": "Voir le projet",
      "projects.cta": "Voir sur GitHub",
      "sae22.tag": "Projet académique · BUT Informatique",
      "sae22.title": "SAÉ 2.2 : Exploration algorithmique",
      "sae22.subtitle": "Assistant personnel de voyage multimodal — IHM, POO et modélisation par graphes.",
      "sae22.back": "Retour aux projets",
      "sae22.desc.title": "Description",
      "sae22.desc.body": "Ce projet consiste à créer un assistant personnel de voyage, logiciel de calculer, visualiser et comparer des itinéraires pour un utilisateur donné. Il est divisé en 3 parties : IHM, POO et Graphe. Au début, nous devons modéliser un réseau qui est composé de 5 villes et les arêtes (connexions) entre eux avec les 3 critères correspondant aux préférences de l’utilisateur : CO2, Prix, Temps en créant un graphe. Cela étant, nous avons créé un fichier csv qui comprend les poids du graphe pour implémenter et lancer l’algorithme KPCC. Nous avons développé ce logiciel en mettant les correspondances entre les villes pour créer un modèle multimodalités. Enfin, nous devons concevoir une interface basse fidélité en utilisant le logiciel Figma dans de but de montrer à quoi devrait ressembler l’interface finale. Cette interface finale va être conçue par le logiciel SceneBuilder pour implémenter dans le code à la fin.",
      "sae22.tech.title": "Technologies",
      "sae22.soft.title": "Savoir-être requis",
      "sae22.soft.item1": "Travail en équipe",
      "sae22.soft.item2": "L’esprit critique",
      "sae22.soft.item3": "Diviser les tâches en fonction du point fort de chaque membre dans le groupe",
      "sae22.hard.title": "Savoir-faire complémentaire",
      "sae22.hard.item1": "Concevoir un graphe",
      "sae22.hard.item2": "Concevoir un UML",
      "sae22.gallery.title": "Aperçus du projet",
      "sae22.gallery.c1": "Modélisation du graphe multimodal (5 villes · Train, Bus, Avion)",
      "sae22.gallery.c2": "Exécution Java & résultats de l'algorithme KPCC (JGraphT)",
      "sae22.gallery.c3": "Maquette basse fidélité réalisée sous Figma",
      "sae22.gallery.c4": "Interface JavaFX conçue avec SceneBuilder",
      "interests.title": "Centres d'intérêt",
      "interests.subtitle": "Ce qui nourrit ma curiosité au quotidien en dehors des cours et des projets.",
      "interests.i1.title": "Cybersécurité & Veille",
      "interests.i1.desc": "Suivi de l'actualité sécurité, challenges techniques (CTF) et bonnes pratiques de protection des systèmes.",
      "interests.i2.title": "Open Source & Homelab",
      "interests.i2.desc": "Expérimentation de services auto-hébergés, administration Linux et découverte d'outils open source.",
      "interests.i3.title": "Musique, Sport & Tech",
      "interests.i3.desc": "Écoute musicale, activités sportives et exploration de nouvelles technologies matérielles et logicielles.",
      "contact.title": "Contact",
      "contact.subtitle": "Vous souhaitez échanger à propos d'un projet, d'une alternance ou d'un stage ? N'hésitez pas à me contacter.",
      "contact.tel.label": "Téléphone",
      "contact.mail.label": "Mail",
      "contact.univ_mail.label": "Email universitaire",
      "contact.github.label": "GitHub",
      "contact.git.label": "Git (GitLab Univ. Lille)",
      "contact.linkedin.label": "LinkedIn",
      "contact.address.label": "Adresse",
      "cv.title": "Mon CV",
      "cv.subtitle": "Consultez mon curriculum vitae en ligne ou téléchargez-le directement au format PDF.",
      "cv.view": "Consulter mon CV",
      "cv.download": "Télécharger mon CV",
      "cv.back": "Retour au portfolio",
      "footer.built": "Propulsé par Jekyll · Thème"
    },
    en: {
      "page.title": "Minh-Son CONG | Portfolio",
      "nav.about": "About",
      "nav.parcours": "Background",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.interests": "Interests",
      "nav.contact": "Contact",
      "hero.subtitle": "Developer - Computer Science Student (BUT Informatique - DACS Track)",
      "hero.cv": "My Resume",
      "hero.contact": "Contact Me",
      "about.title": "About Me",
      "about.description": "Second-year Computer Science student (BUT Informatique) at IUT de Lille, specializing in the deployment of communicating and secure applications (DACS). I have skills in Linux systems administration, database management, Git and Docker, as well as application design and development, particularly in Java. Passionate about DevOps, systems administration, and networking, I am looking for an 8 to 10-week internship starting April 5, 2027.",
      "parcours.title": "Academic Background",
      "parcours.subtitle": "My academic path from high school to the BUT Informatique DACS track.",
      "parcours.s3.badge": "Current · 2nd Year",
      "parcours.s3.title": "IUT de Lille — DACS Track",
      "parcours.s3.desc": "Specializing in Deployment of Communicating and Secure Applications: Linux systems administration, networking, Docker containerization, databases, and Java development.",
      "parcours.s2.badge": "BUT Informatique · 1st Year",
      "parcours.s2.title": "IUT de Lille — 1st Year",
      "parcours.s2.desc": "Core computer science foundations: algorithms, object-oriented programming in Java, relational databases, web development, and Linux systems.",
      "parcours.s1.badge": "High School",
      "parcours.s1.title": "Chu Van An High School for the Gifted",
      "parcours.s1.desc": "Rigorous secondary education focused on sciences, analytical thinking, and mathematics, preparing for higher studies in computer science.",
      "skills.title": "Skills",
      "skills.subtitle": "Technical expertise and interpersonal skills developed through coursework and projects.",
      "skills.tech.title": "Technical Skills",
      "skills.cat.network": "Networks",
      "skills.cat.sys": "Systems / Virtualization",
      "skills.cat.front": "Front-end",
      "skills.cat.back": "Back-end",
      "skills.cat.db": "Databases",
      "skills.cat.tools": "Tools",
      "skills.cat.ops": "Ops",
      "skills.soft.title": "Interpersonal Skills",
      "skills.soft.s1.title": "Teamwork",
      "skills.soft.s1.desc": "Effective collaboration on group projects (SAÉ), task coordination, and peer technical support.",
      "skills.soft.s2.title": "Rigor & Problem Solving",
      "skills.soft.s2.desc": "Methodical troubleshooting of network or application issues and delivery of reliable solutions.",
      "skills.soft.s3.title": "Autonomy & Adaptability",
      "skills.soft.s3.desc": "Ability to quickly learn new tools, Linux environments, and DevOps technologies.",
      "languages.title": "Languages",
      "languages.en.name": "English",
      "languages.en.level": "Intermediate - B2",
      "languages.fr.name": "French",
      "languages.fr.level": "Intermediate - B2",
      "languages.vi.name": "Vietnamese",
      "languages.vi.level": "Fluent",
      "projects.title": "Projects",
      "projects.p1.title": "SAÉ 2.2 : Algorithmic Exploration",
      "projects.p1.stack": "SceneBuilder · Java · JavaFX · UML · Figma",
      "projects.p1.desc": "Personal multimodal travel assistant (5 cities, CO2, Price, Time criteria) integrating the KPCC shortest-paths algorithm, UML/Graph modeling, Figma wireframes, and a JavaFX UI built with SceneBuilder.",
      "projects.p2.title": "Containerized Infrastructure & Deployment",
      "projects.p2.stack": "Docker · Linux · Nginx · SSH",
      "projects.p2.desc": "Setup and hardening of multi-service application environments using Docker, Nginx reverse proxy, and automated Linux deployments.",
      "projects.view": "View project",
      "projects.cta": "View on GitHub",
      "sae22.tag": "Academic Project · BUT Informatique",
      "sae22.title": "SAÉ 2.2 : Algorithmic Exploration",
      "sae22.subtitle": "Personal multimodal travel assistant — UI, OOP, and graph modeling.",
      "sae22.back": "Back to projects",
      "sae22.desc.title": "Description",
      "sae22.desc.body": "This project consists of building a personal travel assistant software to compute, visualize, and compare routes for a given user. It is split into 3 parts: UI, OOP, and Graph modeling. First, we modeled a network of 5 cities and the edges (connections) between them using 3 user preference criteria—CO2, Price, and Time—by building a graph. We created a CSV file containing the graph weights to implement and run the KPCC algorithm, adding city transfers to build a multimodal model. Finally, we designed a low-fidelity prototype in Figma to establish the target UI layout, then built the final JavaFX interface using SceneBuilder for integration in the application.",
      "sae22.tech.title": "Technologies",
      "sae22.soft.title": "Soft Skills Required",
      "sae22.soft.item1": "Teamwork",
      "sae22.soft.item2": "Critical thinking",
      "sae22.soft.item3": "Splitting tasks according to each team member's strengths",
      "sae22.hard.title": "Additional Hard Skills",
      "sae22.hard.item1": "Designing a graph",
      "sae22.hard.item2": "Designing UML diagrams",
      "sae22.gallery.title": "Project Previews",
      "sae22.gallery.c1": "Multimodal graph modeling (5 cities · Train, Bus, Plane)",
      "sae22.gallery.c2": "Java console execution & KPCC algorithm output (JGraphT)",
      "sae22.gallery.c3": "Low-fidelity wireframe designed in Figma",
      "sae22.gallery.c4": "Final JavaFX interface built with SceneBuilder",
      "interests.title": "Interests",
      "interests.subtitle": "What keeps me curious and motivated outside of classes and coursework.",
      "interests.i1.title": "Cybersecurity & Tech Watch",
      "interests.i1.desc": "Following security news, solving technical challenges (CTF), and learning system hardening best practices.",
      "interests.i2.title": "Open Source & Homelab",
      "interests.i2.desc": "Experimenting with self-hosted services, Linux administration, and open-source tooling.",
      "interests.i3.title": "Music, Sports & Tech",
      "interests.i3.desc": "Listening to music, staying active through sports, and exploring new hardware and software technologies.",
      "contact.title": "Contact",
      "contact.subtitle": "Interested in discussing a project, work-study opportunity, or internship? Feel free to reach out.",
      "contact.tel.label": "Phone",
      "contact.mail.label": "Email",
      "contact.univ_mail.label": "University Email",
      "contact.github.label": "GitHub",
      "contact.git.label": "Git (Univ. Lille GitLab)",
      "contact.linkedin.label": "LinkedIn",
      "contact.address.label": "Address",
      "cv.title": "My Resume",
      "cv.subtitle": "View my resume online or download it directly as a PDF.",
      "cv.view": "View my Resume",
      "cv.download": "Download my Resume",
      "cv.back": "Back to portfolio",
      "footer.built": "Built with Jekyll · Theme"
    }
  };

  var langButtons = document.querySelectorAll(".lang-btn");
  var i18nElements = document.querySelectorAll("[data-i18n]");

  function setLanguage(lang) {
    var dict = translations[lang] || translations.fr;
    document.documentElement.setAttribute("lang", lang);
    if (dict["page.title"]) {
      document.title = dict["page.title"];
    }

    for (var i = 0; i < i18nElements.length; i++) {
      var el = i18nElements[i];
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    }

    for (var j = 0; j < langButtons.length; j++) {
      var btn = langButtons[j];
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch (e) {}
  }

  for (var k = 0; k < langButtons.length; k++) {
    langButtons[k].addEventListener("click", function () {
      setLanguage(this.getAttribute("data-lang"));
    });
  }

  var savedLang = "fr";
  try {
    var stored = localStorage.getItem("portfolio_lang");
    if (stored === "en" || stored === "fr") {
      savedLang = stored;
    }
  } catch (e) {}
  setLanguage(savedLang);

  // Mobile navbar toggle
  var navToggle = document.getElementById("navbar-toggle");
  var navMenu = document.getElementById("navbar-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      var icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-times", isOpen);
      }
    });

    var navLinks = navMenu.querySelectorAll(".nav-link");
    for (var m = 0; m < navLinks.length; m++) {
      navLinks[m].addEventListener("click", function () {
        if (navMenu.classList.contains("is-open")) {
          navMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
          var icon = navToggle.querySelector("i");
          if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
          }
        }
      });
    }
  }

  // Navbar scroll shadow
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }
}, false);
