const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main > section");


function openSection(sectionId) {

    const targetSection = document.querySelector(sectionId);

    if (!targetSection) {
        return;
    }

    // Expand the selected section
    targetSection.classList.add("active");

    // Wait for the expansion to begin,
    // then scroll to the section.
    setTimeout(() => {

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/* Navigation */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        openSection(targetId);

    });

});


/* Section headings can also be clicked */

sections.forEach(section => {

    const heading = section.querySelector("h2");

    if (heading) {

        heading.addEventListener("click", function() {

            section.classList.add("active");

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }

});


/* Home starts expanded */

openSection("#home");
