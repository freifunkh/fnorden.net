$(document).ready(function() {
    var map = L.map('map').setView([52.401247, 9.702307], 16);

    map.scrollWheelZoom.disable();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([52.401247, 9.702307]).addTo(map)
        .bindPopup('Paul-Dohrmann-Schule, Burgweg 5, 30419 Hannover')
        .openPopup();
});
