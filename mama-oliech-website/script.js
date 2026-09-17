// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ============================
// NAVBAR SCROLL EFFECT
// ============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(17, 17, 17, 0.95)";
        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";

    }

});


// ============================
// SCROLL REVEAL
// ============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});