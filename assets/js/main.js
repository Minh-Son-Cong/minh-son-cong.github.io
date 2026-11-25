document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({ offset: -64 });

  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false, speed: 19.18081918081918, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 4, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
      nb: 80
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  var translations = {
    fr: {
      "page.title": "Minh-Son CONG | Portfolio",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.interests": "Centres d'intérêt",
      "nav.contact": "Contact",
      "hero.subtitle": "Développeur - Étudiant en BUT Informatique - Parcours DACS",
      "hero.about": "À propos",
      "hero.projects": "Projets",
      "about.title": "À propos",
      "about.description": "Étudiant en BUT Informatique (parcours DACS - Déploiement d'Applications Communicantes et Sécurisées), passionné par le développement logiciel, l'administration système, les réseaux et la cybersécurité.",
      "about.focus": "Actuellement en formation, je conçois, déploie et sécurise des applications et infrastructures réseau fiables, tout en explorant l'automatisation et le développement full-stack.",
      "skills.title": "Compétences",
      "skills.subtitle": "Un socle technique orienté développement, systèmes, réseaux et sécurisation d'applications.",
      "skills.sys.title": "Systèmes & Réseaux",
      "skills.sys.desc": "Administration Linux (Debian/Ubuntu), conteneurisation Docker, services réseau, SSH et déploiement sécurisé.",
      "skills.dev.title": "Développement",
      "skills.dev.desc": "Développement logiciel et web en Python, Java, C et JavaScript, avec une attention portée à la qualité du code.",
      "skills.tools.title": "Outils & Données",
      "skills.tools.desc": "Gestion de version Git/GitHub, bases de données relationnelles (PostgreSQL/SQL) et intégration web HTML5/CSS3.",
      "projects.title": "Projets",
      "projects.p1.title": "Infrastructure & Déploiement Conteneurisé",
      "projects.p1.stack": "Docker · Linux · Nginx · SSH",
      "projects.p1.desc": "Mise en place et sécurisation d'environnements applicatifs multi-services avec Docker, reverse proxy Nginx et automatisation du déploiement sous Linux.",
      "projects.p2.title": "Application Web & API Sécurisée",
      "projects.p2.stack": "Python · JavaScript · PostgreSQL · Git",
      "projects.p2.desc": "Conception d'une application client-serveur avec authentification, gestion des droits et persistance des données dans le cadre du parcours DACS.",
      "projects.cta": "Voir sur GitHub",
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
      "footer.built": "Propulsé par Jekyll · Thème"
    },
    en: {
      "page.title": "Minh-Son CONG | Portfolio",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.interests": "Interests",
      "nav.contact": "Contact",
      "hero.subtitle": "Developer - Computer Science Student (BUT Informatique - DACS Track)",
      "hero.about": "About Me",
      "hero.projects": "Projects",
      "about.title": "About Me",
      "about.description": "Computer Science student in BUT Informatique (DACS track — Deployment of Communicating and Secure Applications), passionate about software development, systems administration, networking, and cybersecurity.",
      "about.focus": "Through my studies and personal projects, I design, deploy, and secure reliable applications and network infrastructures while exploring automation and full-stack development.",
      "skills.title": "Skills",
      "skills.subtitle": "A technical foundation focused on software development, systems, networking, and application security.",
      "skills.sys.title": "Systems & Networks",
      "skills.sys.desc": "Linux administration (Debian/Ubuntu), Docker containerization, network services, SSH, and secure deployment.",
      "skills.dev.title": "Development",
      "skills.dev.desc": "Software and web development with Python, Java, C, and JavaScript, with a strong focus on clean code.",
      "skills.tools.title": "Tools & Data",
      "skills.tools.desc": "Version control with Git/GitHub, relational databases (PostgreSQL/SQL), and HTML5/CSS3 web integration.",
      "projects.title": "Projects",
      "projects.p1.title": "Containerized Infrastructure & Deployment",
      "projects.p1.stack": "Docker · Linux · Nginx · SSH",
      "projects.p1.desc": "Setup and hardening of multi-service application environments using Docker, Nginx reverse proxy, and automated Linux deployments.",
      "projects.p2.title": "Secure Web Application & API",
      "projects.p2.stack": "Python · JavaScript · PostgreSQL · Git",
      "projects.p2.desc": "Design and implementation of a client-server application featuring authentication, access control, and persistent data storage.",
      "projects.cta": "View on GitHub",
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

  var navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }
}, false);
