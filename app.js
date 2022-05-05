window.addEventListener("DOMContentLoaded", (event) => {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".nav_menu");
    const triggers = document.querySelectorAll(".nav_trigger");
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 400,
    });
    const scrollUp = document.querySelector(".scroll_up");

    // Header
    function animateHeader() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            header.classList.add("is-active");
            console.log("Hello");
        } else {
            header.classList.remove("is-active");
        }
    }

    window.onscroll = function () {
        animateHeader();
    };

    // Menu
    for (trigger of triggers) {
        trigger.onclick = function () {
            menu.classList.toggle("is-active");
        };
    }

    // Scroll Reveal
    sr.reveal(
        ".home_title, .popular_container, .features_img, .featured_filters"
    );
    sr.reveal(".home_subtitle", { delay: 500 });
    sr.reveal(".home_elec", { delay: 600 });
    sr.reveal(".home_img", { delay: 800 });
    sr.reveal(".home_carData", {
        delay: 900,
        interval: 100,
        origin: "bottom",
    });
    sr.reveal(".home_button", {
        delay: 1000,
        origin: "bottom",
    });
    sr.reveal(".about_group, .offer_data", {
        origin: "left",
    });
    sr.reveal(".about_data, .offer_img", {
        origin: "right",
    });
    sr.reveal(".features_map", {
        delay: 600,
        origin: "bottom",
    });
    sr.reveal(".features_card", {
        interval: 300,
    });
    sr.reveal(".featured_card, .logos_content, .footer_content", {
        interval: 100,
    });

    // Scroll Up
    function showScrollUp() {
        if (
            document.body.scrollTop > 350 ||
            document.documentElement.scrollTop > 350
        ) {
            scrollUp.classList.add("is-active");
        } else {
            scrollUp.classList.remove("is-active");
        }
    }

    window.onscroll = function () {
        showScrollUp();
    };

    // Swiper
    let swiperPopular = new Swiper(".popular_container", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            720: {
                slidesPerView: 3,
            },
            1024: {
                spaceBetween: 48,
            },
        },
    });
});
