/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

document.addEventListener("DOMContentLoaded", function () {
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
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $("a.page-scroll").bind("click", function (event) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr("href")).offset().top,
                },
                1500,
                "easeInOutExpo",
            );
        window.location.href = $anchor.attr("href");
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
});
