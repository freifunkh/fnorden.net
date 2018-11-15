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
