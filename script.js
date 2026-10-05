const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main > section");


function openSection(sectionId) {

    // Close all sections
    sections.forEach(section => {
        section.classList.remove("active");
    });


    // Find the selected section
    const targetSection = document.querySelector(sectionId);


    // Open the selected section
    if (targetSection) {

        targetSection.classList.add("active");


        // Move the page to the selected section
        setTimeout(() => {

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);
    }
}


/* Navigation */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        openSection(targetId);

    });

});


/* Open Home automatically when the website loads */

openSection("#home");
