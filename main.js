let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.45768752688416, lng: 30.52579633229511 },
    //50.45768752688416, 30.52579633229511
    zoom: 8,
  });
}
