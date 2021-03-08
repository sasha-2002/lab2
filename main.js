var map;
var marker;
var info;

const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };


info = new google.maps.InfoWindow({
  content: '<h2>Sasha</h2>'
});


function initMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatLng,
  });
 
  map.addListener('click', (e) => {
    new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
  });
  marker.addListener('click', function(){
    
    info.open(map, marker);
  });
  
  
}

