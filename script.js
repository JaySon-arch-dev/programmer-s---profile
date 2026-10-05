const navLinks =
    document.querySelectorAll("nav a");

const sections =
    document.querySelectorAll("main > section");

const expandButtons =
    document.querySelectorAll(".expand-button");


/* =========================
   NAVIGATION HEIGHT
========================= */

function getNavigationHeight() {

    const navigation =
        document.querySelector("header");

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
   OPEN SECTION
========================= */

function openSection(section) {

    if (!section) return;

    section.classList.add("active");

    scrollToSection(section);
}


/* =========================
   CLOSE SECTION
========================= */

function closeSection(section) {

    if (!section) return;

    section.classList.remove("active");
}


/* =========================
   CLOSE ALL SECTIONS
   EXCEPT HOME
========================= */

function closeAllSections() {

    sections.forEach(section => {

        if (section.id !== "home") {

            section.classList.remove("active");

        }

    });

}


/* =========================
   NAVIGATION
========================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            const targetId =
                this.getAttribute("href");

            const targetSection =
                document.querySelector(targetId);

            if (!targetSection) return;


            /* =====================
               HOME
            ===================== */

            if (targetId === "#home") {

                /*
                 * Clicking Home closes
                 * every other section.
                 */

                closeAllSections();

                targetSection.classList.add("active");


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                return;
            }


            /* =====================
               OTHER SECTIONS
            ===================== */

            openSection(targetSection);

        }
    );

});


/* =========================
   EXPAND / RETRACT ARROWS
========================= */

expandButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            /*
             * Prevent the section header
             * from receiving the same click.
             */

            event.stopPropagation();


            const section =
                this.closest("section");

            if (!section) return;


            /*
             * If already open:
             * RETRACT IT.
             */

            if (
                section.classList.contains("active")
            ) {

                closeSection(section);

                return;
            }


            /*
             * Otherwise:
             * EXPAND IT.
             */

            openSection(section);

        }
    );

});


/* =========================
   SECTION HEADER CLICK
========================= */

sections.forEach(section => {

    const header =
        section.querySelector(".section-header");

    if (!header) return;


    header.addEventListener(
        "click",
        function(event) {

            /*
             * If the arrow itself was clicked,
             * let the arrow event handle it.
             */

            if (
                event.target.closest(
                    ".expand-button"
                )
            ) {

                return;
            }


            /*
             * Clicking a collapsed section
             * opens it.
             */

            if (
                !section.classList.contains("active")
            ) {

                openSection(section);

            }

        }
    );

});


/* =========================
   INITIAL HOME STATE
========================= */

const home =
    document.querySelector("#home");

if (home) {

    home.classList.add("active");

}
