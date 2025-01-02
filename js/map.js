$(document).ready(function () {
    var map = L.map("map").setView([52.39314088, 9.72286284], 16);

    map.scrollWheelZoom.disable();

    L.tileLayer("https:///tiles.ffh.zone/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([52.39314088, 9.72286284])
        .addTo(map)
        .bindPopup("Hüttenstraße 22b, 30165 Hannover")
        .openPopup();
});
