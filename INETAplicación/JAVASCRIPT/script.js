var map = L.map('map').fitWorld();
var marker = L.marker([-34.81476013486041, -58.45838305647856]).addTo(map);
var markerN01 = L.marker([-34.8038947136587, -58.43691905985241]).addTo(map);
var markerN02 = L.marker([-34.85740856099752, -58.3891900671285]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom: 19,
    attribution: '© OpenStreetMap'

}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup(" Ubicación actual ").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {

    alert(e.message);

}

map.on('locationerror', onLocationError);

marker.bindPopup("<b> Instituto Técnico </b> <br> Monte Grande ").openPopup();
markerN01.bindPopup("<b> Escuela de Educación Secundaria Técnica Nro 4 </b> <br> Lavallol ").openPopup();
markerN02.bindPopup("<b> Escuela De Educación Secundaria Técnica Nº1 General Martín Miguel De Güemes </b> <br> Longchamps ").openPopup();



/* ====== SIDEBAR MENU ====== */

const sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle");
      
      toggle.addEventListener("click", () => {

      sidebar.classList.toggle("close");

});