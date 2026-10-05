const navLinks =
    document.querySelectorAll("nav a");

const sections =
    document.querySelectorAll("main > section");

const expandButtons =
    document.querySelectorAll(".expand-button");


/* =========================
   OPEN SECTION
========================= */

function openSection(sectionId) {

    const targetSection =
        document.querySelector(sectionId);


    if (!targetSection) {
        return;
    }


    /* Expand the section */

    targetSection.classList.add("active");


    /*
        Wait briefly for the expansion
        animation to begin, then scroll
        to the section.
    */

    setTimeout(() => {

        targetSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 150);

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


            openSection(targetId);

        }
    );

});


/* =========================
   EXPAND BUTTONS
========================= */

expandButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            const section =
                this.closest("section");


            if (!section) {
                return;
            }


            section.classList.add("active");


            section.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* =========================
   SECTION HEADER
========================= */

sections.forEach(section => {

    const header =
        section.querySelector(
            ".section-header"
        );


    if (!header) {
        return;
    }


    header.addEventListener(
        "click",
        function(event) {

            /*
                Don't run this when the
                expand button itself is clicked.
            */

            if (
                event.target.classList.contains(
                    "expand-button"
                )
            ) {
                return;
            }


            section.classList.add("active");


            section.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* =========================
   HOME STARTS OPEN
========================= */

const home =
    document.querySelector("#home");


if (home) {

    home.classList.add("active");

}
