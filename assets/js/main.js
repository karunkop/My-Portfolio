/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = `skills__content skills__closed`;

        if (itemClass === "skills__content skills__closed") {
            this.parentNode.className = "skills__content skills__open";
        } else {
            this.parentNode.className = "skills__content skills__closed";
        }
    }
}

skillsHeader.forEach(el => el.addEventListener("click", toggleSkills));
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");
        tabs.forEach(tab => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => modal(i));
});

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach(modalView => modalView.classList.remove("active-modal"));
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    // Optional parameters

    cssMode: true,
    grabCursor: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById("scroll-up");
    if (this.scrollY >= 560) {
        scrollTop.classList.add("scroll-show");
    } else {
        scrollTop.classList.remove("scroll-show");
    }
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== Email ====================*/

/*==================== Scroll reveal Animation ====================*/

const sr = ScrollReveal({
    duration: 1200,
    reset: true,
    origin: "top",
    distance: "50px",
    opacity: 0,
});

sr.reveal(".home__img", { distance: "100px" });
sr.reveal(".about__img", {});
sr.reveal(".button", { distance: "30px", origin: "bottom" });
sr.reveal(".portfolio__button", { reset: false });
sr.reveal(".home__title,.home__subtitle,.home__description,.about__description", {
    distance: "100px",
    origin: "left",
    delay: 200,
    reset: false,
});

sr.reveal(".box", { interval: 300 });
sr.reveal(".home__social-icon", { interval: 300, origin: "left", delay: 150, reset: false });
sr.reveal(".skills__content", { interval: 200, origin: "right", reset: false });
sr.reveal(".skills__percentage", { interval: 200, origin: "left", reset: false });
sr.reveal(".services__content", { interval: 300, origin: "left", reset: false, distance: "0px", duration: 2000 });
sr.reveal(".services__button", { duration: 0, reset: false });
sr.reveal(".section__title,.section__subtitle", { origin: "left", duration: 1500, reset: false });

