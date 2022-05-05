window.addEventListener("DOMContentLoaded", (event) => {
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 400,
    });

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
});
