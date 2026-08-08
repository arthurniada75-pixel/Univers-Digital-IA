/* =====================================================
   UNIVERS DIGITAL & IA
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    /* ==========================================
       FERMER LE MENU AU CLIC
    ========================================== */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

    /* ==========================================
       HEADER AU SCROLL
    ========================================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================================
       RECHERCHE
    ========================================== */

    const searchForm = document.getElementById("searchForm");

    const searchInput = document.getElementById("searchInput");

    if (searchForm) {

        searchForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const value = searchInput.value
                .toLowerCase()
                .trim();

            const pages = {

                "accueil":"accueil",

                "service":"services",

                "services":"services",

                "portfolio":"portfolio",

                "formation":"formations",

                "formations":"formations",

                "facebook":"formations",

                "tiktok":"formations",

                "trading":"services",

                "ia":"services",

                "intelligence artificielle":"services",

                "site":"services",

                "site web":"services",

                "community":"services",

                "contact":"contact",

                "à propos":"apropos",

                "apropos":"apropos"

            };

            if (pages[value]) {

                const target = document.getElementById(pages[value]);

                if (target) {

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }

        });

    }

});

/* =====================================================
                HERO ANIMATIONS
===================================================== */

window.addEventListener("load", () => {

    const heroElements = [

        ".hero-badge",

        ".hero h1",

        ".hero p",

        ".hero-buttons",

        ".hero-domains",

        ".hero-stats",

        ".hero-image"

    ];

    heroElements.forEach((selector, index) => {

        const element = document.querySelector(selector);

        if (!element) return;

        element.style.opacity = "0";

        element.style.transform = "translateY(40px)";

        element.style.transition =
            "all .8s ease " + (index * 0.15) + "s";

        setTimeout(() => {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        },100);

    });

});


/* =====================================================
          ANIMATION AU SCROLL
===================================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});

/* =====================================================
      ANIMATION SECTION POURQUOI CHOISIR
===================================================== */

const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

whyCards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(60px)";

    card.style.transition=`all .8s ease ${index*0.15}s`;

    whyObserver.observe(card);

});

/* =====================================================
            ANIMATION DES SERVICES
===================================================== */

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

serviceCards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=`all .7s ease ${index*0.12}s`;

    serviceObserver.observe(card);

});

/* =====================================================
          FILTRES DU PORTFOLIO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".portfolio-filter");
    const items = document.querySelectorAll(".portfolio-item");

    filters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            /* Retirer la classe active de tous les boutons */
            filters.forEach(function (button) {
                button.classList.remove("active");
            });

            /* Activer le bouton sélectionné */
            filter.classList.add("active");

            /* Récupérer la catégorie */
            const category = filter.getAttribute("data-filter");

            /* Afficher / masquer les projets */
            items.forEach(function (item) {

                const itemCategory = item.getAttribute("data-category");

                if (category === "all" || category === itemCategory) {

                    item.style.display = "";

                    setTimeout(function () {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 20);

                } else {

                    item.style.opacity = "0";
                    item.style.transform = "scale(.95)";

                    setTimeout(function () {
                        item.style.display = "none";
                    }, 250);

                }

            });

        });

    });

});

/* =====================================================
        PORTFOLIO — DÉTAILS DES PROJETS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const projectModal = document.getElementById("projectModal");
    const projectModalOverlay = document.getElementById("projectModalOverlay");
    const projectModalClose = document.getElementById("projectModalClose");

    const projectModalImage = document.getElementById("projectModalImage");
    const projectModalCategory = document.getElementById("projectModalCategory");
    const projectModalTitle = document.getElementById("projectModalTitle");

    const projectModalNeed = document.getElementById("projectModalNeed");
    const projectModalApproach = document.getElementById("projectModalApproach");
    const projectModalProcess = document.getElementById("projectModalProcess");
    const projectModalResult = document.getElementById("projectModalResult");

    const projectModalWhatsapp = document.getElementById("projectModalWhatsapp");

    const projectButtons = document.querySelectorAll(".portfolio-view");


    /* =================================================
                    DONNÉES DES PROJETS
    ================================================= */

    const projects = [

        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7625a81604b6.69832408_ChatGPTImage28juil.202610_03_24.png",

            category: "Publicité",

            title: "Affiche publicitaire",

            need:
                "Créer un support visuel capable de présenter une offre de manière claire, professionnelle et attractive.",

            approach:
                "Nous travaillons sur la hiérarchie des informations, la composition visuelle, la typographie et l'identité graphique afin de rendre le message immédiatement compréhensible.",

            process:
                "Nous définissons d'abord l'objectif de l'affiche, puis nous organisons les informations essentielles avant de concevoir le visuel et d'effectuer les ajustements nécessaires.",

            result:
                "Obtenir une affiche professionnelle adaptée à la communication digitale et aux réseaux sociaux."
        },


        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7625a81721d5.16934788_ChatGPTImage3ao%C3%BBt202615_58_56.png",

            category: "Publicité",

            title: "Publicité Facebook",

            need:
                "Aider une entreprise à présenter son offre à une audience pertinente sur Facebook.",

            approach:
                "Nous combinons visuel publicitaire, message marketing et ciblage afin de construire une communication cohérente avec l'objectif de la campagne.",

            process:
                "Nous définissons l'objectif, identifions l'audience, préparons les éléments publicitaires, lançons la campagne puis analysons les performances pour effectuer les optimisations nécessaires.",

            result:
                "Améliorer la visibilité de l'offre et générer davantage d'opportunités commerciales grâce à une campagne structurée."
        },


        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7625a7d29834.03362892_ChatGPTImage28juil.202613_03_00.png",

            category: "Site web",

            title: "Création de site web",

            need:
                "Créer une présence professionnelle sur internet permettant de présenter une activité et de faciliter la prise de contact.",

            approach:
                "Nous construisons une interface moderne avec une navigation claire, une présentation structurée des services et des appels à l'action visibles.",

            process:
                "Nous définissons la structure du site, organisons les contenus, intégrons les éléments visuels puis optimisons l'expérience sur ordinateur, tablette et mobile.",

            result:
                "Disposer d'un site professionnel capable de présenter efficacement une activité et d'orienter les visiteurs vers une action."
        },


        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7625a7d68905.10845922_ChatGPTImage28juil.202612_57_54.png",

            category: "Logo",

            title: "Création de logo",

            need:
                "Créer une identité visuelle reconnaissable permettant à une marque de se différencier.",

            approach:
                "Nous recherchons une combinaison équilibrée entre symbole, typographie, simplicité et cohérence avec l'univers de la marque.",

            process:
                "Nous analysons l'activité et son positionnement, développons une direction graphique puis construisons le logo autour d'une identité claire et mémorisable.",

            result:
                "Obtenir une identité visuelle professionnelle pouvant être utilisée sur les réseaux sociaux, supports publicitaires et différents supports de communication."
        },


        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7625a7d320e4.81524941_ChatGPTImage28juil.202610_03_55.png",

            category: "Design graphique",

            title: "Création graphique",

            need:
                "Transformer une idée ou une information commerciale en un visuel clair et professionnel.",

            approach:
                "Nous travaillons la composition, les couleurs, les images et la typographie afin de créer un visuel cohérent avec l'identité de la marque.",

            process:
                "Nous identifions le message principal, sélectionnons les éléments visuels appropriés puis construisons et ajustons la composition finale.",

            result:
                "Créer un support graphique professionnel pouvant renforcer la communication d'une entreprise sur ses différents canaux."
        },


        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7625a81966e4.89680626_ChatGPTImage3ao%C3%BBt202616_11_53.png",

            category: "Trading",

            title: "Analyse Trading",

            need:
                "Présenter une analyse structurée du marché afin d'identifier des scénarios possibles et de mieux organiser une prise de décision.",

            approach:
                "Nous utilisons notamment l'analyse du prix, les zones de liquidité, la structure du marché et les concepts Smart Money / ICT.",

            process:
                "Nous commençons par analyser le contexte général, identifions la structure et les zones importantes, puis construisons différents scénarios avec une gestion du risque adaptée.",

            result:
                "Disposer d'une analyse structurée permettant de mieux préparer un scénario de marché, sans garantir un résultat financier."
        },

        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7772f2b1e159.96879855_Captured%C3%A9cran2026-07-08123655.png",

            category: "Design graphique",

            title: "Création graphique — Projet 7",

            need:
                "Concevoir un support graphique professionnel capable de présenter une information ou une offre de manière claire et visuellement attractive.",

            approach:
                "Nous travaillons la composition, la hiérarchie des informations, la typographie et les éléments visuels afin de créer une communication cohérente et facilement identifiable.",

            process:
                "Nous partons du besoin de communication, sélectionnons les informations essentielles puis construisons progressivement la composition graphique avant d'effectuer les ajustements finaux.",

            result:
                "Obtenir un visuel professionnel adapté à la communication digitale et aux différents supports de diffusion de la marque."
        },


        {
            image: "https://d1yei2z3i6k35z.cloudfront.net/15223816/6a7772f2b1e151.66183647_Captured%C3%A9cran2026-07-08120129.png",

            category: "Design graphique",

            title: "Création graphique — Projet 8",

            need:
                "Transformer une idée de communication en un visuel structuré, moderne et cohérent avec l'identité de la marque.",

            approach:
                "Nous mettons l'accent sur la lisibilité, l'équilibre visuel et la mise en valeur du message principal afin que le contenu puisse être compris rapidement.",

            process:
                "Nous analysons le message à transmettre, organisons les différents éléments graphiques puis travaillons la composition jusqu'à obtenir un résultat équilibré et professionnel.",

            result:
                "Créer un support graphique pouvant renforcer la présence visuelle de la marque et être utilisé efficacement sur ses différents canaux de communication."
        }
       
    ];


    /* =================================================
                OUVERTURE D'UN PROJET
    ================================================= */

    projectButtons.forEach(function (button, index) {

        button.addEventListener("click", function () {

            const project = projects[index];

            if (!project) {
                return;
            }

            projectModalImage.src = project.image;
            projectModalImage.alt = project.title;

            projectModalCategory.textContent = project.category;
            projectModalTitle.textContent = project.title;

            projectModalNeed.textContent = project.need;
            projectModalApproach.textContent = project.approach;
            projectModalProcess.textContent = project.process;
            projectModalResult.textContent = project.result;


            /* Message WhatsApp */

            const message =
                "Bonjour,%0A%0A" +
                "Je suis intéressé(e) par un projet similaire à : " +
                project.title +
                ".%0A%0A" +
                "J'ai découvert cette réalisation sur le site UNIVERS DIGITAL & IA et je souhaite obtenir plus d'informations.";

            projectModalWhatsapp.href =
                "https://wa.me/22675210944?text=" + message;


            /* Afficher la fenêtre */

            projectModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* =================================================
                    FERMER LA FENÊTRE
    ================================================= */

    function closeProjectModal() {

        projectModal.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* Bouton X */

    projectModalClose.addEventListener("click", closeProjectModal);


    /* Clic sur le fond */

    projectModalOverlay.addEventListener("click", closeProjectModal);


    /* Touche Échap */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeProjectModal();

        }

    });

});
