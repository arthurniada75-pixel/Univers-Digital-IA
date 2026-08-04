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
