const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main > section");
const expandButtons = document.querySelectorAll(".expand-button");


/* =========================
   OPEN SECTION
========================= */

function openSection(sectionId, shouldScroll = true) {

    const targetSection =
        document.querySelector(sectionId);

    if (!targetSection) {
        return;
    }

    targetSection.classList.add("active");


    if (shouldScroll) {

        setTimeout(() => {

            const navigation =
                document.querySelector("header");

            const navigationHeight =
                navigation.offsetHeight;

            const sectionPosition =
                targetSection.getBoundingClientRect().top;

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

            openSection(targetId, true);

        }
    );

});


/* =========================
   EXPAND BUTTON
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


            const navigation =
                document.querySelector("header");

            const navigationHeight =
                navigation.offsetHeight;


            setTimeout(() => {

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
    );

});


/* =========================
   SECTION HEADER
========================= */

sections.forEach(section => {

    const header =
        section.querySelector(".section-header");


    if (!header) {
        return;
    }


    header.addEventListener(
        "click",
        function(event) {

            if (
                event.target.classList.contains(
                    "expand-button"
                )
            ) {
                return;
            }


            section.classList.add("active");


            const navigation =
                document.querySelector("header");

            const navigationHeight =
                navigation.offsetHeight;


            setTimeout(() => {

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
