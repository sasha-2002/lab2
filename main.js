var map;


function initMap() {
  const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatLng,
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });

  var info = new google.maps.InfoWindow({
      content: '<h2>Sasha</h2>'
  });

  marker.addListener('click', function(){
    info.open(map, marker);
  });
}

