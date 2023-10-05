/* ---------- Apliación de la API de maps ---------- */
// Función para mostrar el cuadro de diálogo y solicitar el consentimiento del usuario
function requestLocationPermission() {
  var consent = confirm("Este sitio web desea acceder a tu ubicación. ¿Deseas permitir el acceso?");

  if (consent) {
    // El usuario dio su consentimiento, obtener la ubicación
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMap, handleError);
    } else {
      alert("La geolocalización no es compatible en este navegador.");
      
    }
  } else {
    // El usuario negó el consentimiento, mostrar mapa predeterminado sin la ubicación
    var mymap = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mymap);
  }
}

// Función para mostrar el mapa con la ubicación del usuario
function showMap(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Crear un mapa en el elemento div con id "map"
  var mymap = L.map('map').setView([latitude, longitude], 15)

  // Agregar una capa de mosaico de OpenStreetMap al mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(mymap);

  // Agregar un marcador en la ubicación del usuario
  L.marker([latitude, longitude]).addTo(mymap);

}

// Función para manejar errores
function handleError(error) {
  // Mostrar un mensaje de error en el mapa
  var errorMessage = "No se pudo obtener la ubicación del usuario.";
  if (error.code === 1) {
    errorMessage = "El usuario ha denegado el acceso a la ubicación.";
  }
  alert(errorMessage);

  // Mostrar un mapa predeterminado sin la ubicación del usuario
  var mymap = L.map('map').setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(mymap);
}

// Solicitar consentimiento del usuario
requestLocationPermission();