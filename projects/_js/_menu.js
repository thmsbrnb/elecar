window.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector(".nav_menu");
    const triggers = document.querySelectorAll(".nav_trigger");

    for (trigger of triggers) {
        trigger.onclick = function () {
            menu.classList.toggle("is-active");
        };
    }
});