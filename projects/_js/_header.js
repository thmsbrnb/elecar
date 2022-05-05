window.addEventListener("DOMContentLoaded", (event) => {
    const header = document.querySelector(".header");

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
});
