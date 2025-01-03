/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a.page-scroll");
    const navbar = document.querySelector(".navbar-custom");

    // event listener to collapse the navbar on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > document.querySelector("header").offsetHeight) {
            navbar.classList.add("fixed-top");
            navbar.style.backgroundColor = "rgba(0,0,0,0.61)";
        } else {
            navbar.classList.remove("fixed-top");
            navbar.style.backgroundColor = "rgba(0,0,0,1)";
        }
    });

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");

            if (!href.startsWith("#")) {
                return;
            }
            event.preventDefault();
            const targetId = href.substring(1); // Remove the "#" from href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
                window.location.href = href;
            }
        });
    });
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggler:visible").click();
});
