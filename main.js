var map;


function initMap() {
  var markers = [];
  const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };

  var infowindow = new google.maps.InfoWindow({ 
    
   });

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
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
      var lat = this.getPosition().lat().toString();
      var lng = this.getPosition().lng().toString();
      console.log(lat + "\n" + lng);
      
      $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=1b5ee5a1a74d624a74750350327ea372",
        function(json){
          var t = parseInt(json.main.temp-273.15);
          console.log(t);
          infowindow.setContent("<h2>"+
          "t = "+
          t.toString()+
          "&#8451\n"+
          "</h2>");
          infowindow.open(map, markers[markers.length-1]);
      });
      
    });
    
  });
}
