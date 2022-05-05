window.addEventListener("DOMContentLoaded", (event) => {
    const scrollUp = document.querySelector(".scroll_up");

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
});
