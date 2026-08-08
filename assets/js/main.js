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
