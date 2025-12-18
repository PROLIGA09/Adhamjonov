// Countdown Timer
let time = 600; // 10 minutes

const timerEl = document.getElementById("timer");

setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerEl.textContent =
        `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    if (time > 0) time--;
}, 1000);


// Active section indicator
const sections = document.querySelectorAll(".page-section");
const dots = document.querySelectorAll(".indicator-dot");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    dots.forEach(dot => {
        dot.classList.toggle(
            "active",
            dot.dataset.section === current
        );
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});
