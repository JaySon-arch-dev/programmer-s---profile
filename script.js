const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main > section");
const expandButtons = document.querySelectorAll(".expand-button");


/* =========================
   GET NAVIGATION HEIGHT
========================= */

function getNavigationHeight() {
    const navigation = document.querySelector("header");

    if (!navigation) {
        return 0;
    }

    return navigation.offsetHeight;
}


/* =========================
   SCROLL TO SECTION
========================= */

function scrollToSection(section) {

    if (!section) return;

    setTimeout(() => {

        const navigationHeight = getNavigationHeight();

        const sectionPosition =
            section.getBoundingClientRect().top;

        const currentPosition =
            window.scrollY;

        const scrollPosition =
            currentPosition +
            sectionPosition -
            navigationHeight -
            15;

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });

    }, 180);
}


/* =========================
   OPEN SECTION
========================= */

function openSection(section, shouldScroll = true) {

    if (!section) return;

    section.classList.add("active");

    if (shouldScroll) {
        scrollToSection(section);
    }
}


/* =========================
   CLOSE SECTION
========================= */

function closeSection(section) {

    if (!section) return;

    section.classList.remove("active");
}


/* =========================
   CLOSE ALL EXCEPT HOME
========================= */

function closeAllSections() {

    sections.forEach(section => {

        if (section.id !== "home") {
            closeSection(section);
        }

    });
}


/* =========================
   NAVIGATION CLICKS
========================= */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId =
            this.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (!targetSection) return;


        /* HOME */

        if (targetId === "#home") {

            closeAllSections();

            targetSection.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            return;
        }


        /* OTHER SECTIONS */

        openSection(targetSection, true);

    });

});


/* =========================
   EXPAND / RETRACT BUTTON
========================= */

expandButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.stopPropagation();

        const section =
            this.closest("section");

        if (!section) return;


        /* RETRACT */

        if (section.classList.contains("active")) {

            closeSection(section);

            return;
        }


        /* EXPAND */

        openSection(section, true);

    });

});


/* =========================
   CLICK SECTION HEADER
========================= */

sections.forEach(section => {

    const header =
        section.querySelector(".section-header");

    if (!header) return;


    header.addEventListener("click", function(event) {

        /*
         * If the actual arrow button was clicked,
         * let the arrow's own event handle it.
         */

        if (
            event.target.closest(".expand-button")
        ) {
            return;
        }


        /* If already open, leave it open */

        if (section.classList.contains("active")) {
            return;
        }


        openSection(section, true);

    });

});


/* =========================
   HOME STARTS OPEN
========================= */

const home =
    document.querySelector("#home");

if (home) {
    home.classList.add("active");
}
