document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded and running...");

    if (typeof bootstrap === "undefined") {
        console.error("Bootstrap is NOT available!");
        return;
    }
    console.log("Bootstrap is available!");

    let offcanvasElement = document.querySelector("#offcanvasNav");
    let hamburgerButton = document.querySelector(".hamburger-menu");

    if (offcanvasElement && hamburgerButton) {
        let offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);

        hamburgerButton.addEventListener("click", function () {
            console.log("Hamburger menu clicked");
            offcanvasInstance.toggle();
        });

        document.querySelectorAll(".offcanvas .nav-link").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(`Clicked: ${this.href}`);

                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }

                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            });
        });
    } else {
        console.error("Offcanvas element or hamburger button not found.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item");

    function revealMenuItems() {
        menuItems.forEach(item => {
            let position = item.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealMenuItems);
    revealMenuItems();
});