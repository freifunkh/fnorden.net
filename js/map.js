$(document).ready(function() {
    var map = L.map('map').setView([52.393140880, 9.722862840], 16);

    map.scrollWheelZoom.disable();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([52.393140880, 9.722862840]).addTo(map)
        .bindPopup('Hüttenstraße 22b, 30165 Hannover')
        .openPopup();
});
