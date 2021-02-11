const burger = document.querySelector(".burger-menu");
const closebtn = document.querySelector(".menu-close");
const overlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu-overlay .top-menu--wrap");


let isOpen = false;
burger.addEventListener("click", (event) => {
    event.preventDefault();
    isOpen = !isOpen;
    overlay.classList.toggle("open");
    if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh"
        document.body.parentNode.style.overflowY = "scroll"
    }
    if (!isOpen) {
        document.body.style.overflow = null;
        document.body.style.height = null
        document.body.parentNode.style.overflowY = null
    }
});
closebtn.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflow = null;
});
overlay.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflow = null;
});

const swiper = new Swiper('.swiper-container', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});