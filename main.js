var map;





function initMap() {
  const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };
  const infowindow = new google.maps.InfoWindow({
    content: '<h2>Sasha</h2>'
  });
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatLng,
  });
 
  map.addListener('click', (e) => {
    var marker_1 = new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    marker_1.addListener('click', (e) => {
      infowindow.open(map, marker_1);
    });
    
  });
  
  
}

