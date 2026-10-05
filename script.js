/* =========================
   ELEMENTS
========================= */

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main > section");
const sectionHeaders = document.querySelectorAll(".section-header");


/* =========================
   NAVIGATION HEIGHT
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

        const navigationHeight =
            getNavigationHeight();

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
   UPDATE ARROW
========================= */

function updateArrow(section) {

    const arrow =
        section.querySelector(".arrow-icon");

    if (!arrow) return;


    if (section.classList.contains("active")) {

        arrow.textContent = "🔽";

    } else {

        arrow.textContent = "▶️";

    }
}


/* =========================
   OPEN SECTION
========================= */

function openSection(section) {

    if (!section) return;

    section.classList.add("active");

    updateArrow(section);

    scrollToSection(section);
}


/* =========================
   CLOSE SECTION
========================= */

function closeSection(section) {

    if (!section) return;

    section.classList.remove("active");

    updateArrow(section);
}


/* =========================
   CLOSE ALL NON-HOME
   SECTIONS
========================= */

function closeAllSections() {

    sections.forEach(section => {

        if (section.id !== "home") {

            section.classList.remove("active");

            updateArrow(section);

        }

    });
}


/* =========================
   NAVIGATION CLICK
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

        openSection(targetSection);

    });

});


/* =========================
   SECTION HEADER CLICK
========================= */

sectionHeaders.forEach(header => {

    header.addEventListener("click", function() {

        const section =
            this.closest("section");

        if (!section) return;


        /* HOME ALWAYS STAYS OPEN */

        if (section.id === "home") {
            return;
        }


        /* CLOSE IF OPEN */

        if (section.classList.contains("active")) {

            closeSection(section);

        }


        /* OPEN IF CLOSED */

        else {

            openSection(section);

        }

    });

});


/* =========================
   INITIAL STATE
========================= */

const home =
    document.querySelector("#home");


if (home) {

    home.classList.add("active");

    updateArrow(home);

}


/* Make sure every
   collapsible section
   starts closed */

sections.forEach(section => {

    if (section.id !== "home") {

        section.classList.remove("active");

        updateArrow(section);

    }

});
