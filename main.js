var map;


function initMap() {
  var marker;
  var markers = [];
  const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };
  var infowindow = new google.maps.InfoWindow({
    content: '<h2>Sasha</h2>'
  });
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatLng,
  });
 
  map.addListener('click', (e) => {
    markers.push(
      new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    }));
    markers[markers.length-1].addListener('click', function(){
      infoWindow.setContent(
        JSON.stringify(e.latLng.toJSON(), null, 2)
      );
      infowindow.open(map, this);     
    });
    
  });
 
  
}

