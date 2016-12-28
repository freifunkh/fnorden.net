/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > $('header').outerHeight()) {
        $(".navbar-custom").addClass("navbar-fixed-top");
        $(".navbar-custom").css("background-color","rgba(0,0,0,0.61)");
        

    } else {
        $(".navbar-custom").removeClass("navbar-fixed-top");
        $(".navbar-custom").css("background-color","rgba(0,0,0,1)");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function() {
    var map = L.map('map').setView([52.371433328429255, 9.71984267234802], 16);

    map.scrollWheelZoom.disable();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([52.371433328429255, 9.71984267234802]).addTo(map)
        .bindPopup('Computerwerkstatt Glocksee Bauhaus e.V. , Glockseestraße 35')
        .openPopup();
});
