const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
// !Animation
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(links => {
        links.classList.toggle("fade");
    })
});