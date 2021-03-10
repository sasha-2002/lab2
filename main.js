var map;

function initMap() {
  var icon = {
    url: "icons/marker.svg",
    scaledSize: new google.maps.Size(30, 50)
  } 
  var markers = [];
  const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };

  var infowindow = new google.maps.InfoWindow({ 
    
  });

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: myLatLng,
  });
 
  map.addListener('click', (e) => {
    markers.push(
      new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: {
        url: "icons/marker.svg",
        scaledSize: new google.maps.Size(30, 50)
      } 
    }));

    markers[markers.length-1].addListener('click', function(){
      var lat = this.getPosition().lat().toString();
      var lng = this.getPosition().lng().toString();
      $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=1b5ee5a1a74d624a74750350327ea372",
        function(json){
          icon = {
            url: "http://openweathermap.org/img/wn/"+json.weather[0].icon+".png",  
          };
          var t = parseInt(json.main.temp-273.15);
          infowindow.setContent(
          "<div id='txt', class='display-6'>"+
          "t = "+
          t.toString()+
          "&#8451\n"+
          "</div>");
      });
      this.setIcon(icon); 
      infowindow.open(map, this); 
    });
    
  });
}
