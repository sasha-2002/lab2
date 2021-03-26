var map;
var marker;
function initMap() {
  marker = new google.maps.Marker();

  const myLatLng = { lat: 49.22619321320788, lng: 28.41249926315556 };

  var infowindow = new google.maps.InfoWindow({  });

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: myLatLng,
  });
 
  map.addListener('click', (e) => {
    $.getJSON(
      "https://api.openweathermap.org/data/2.5/weather?lat="+e.latLng.lat()+"&lon="+e.latLng.lng()+"&appid=1b5ee5a1a74d624a74750350327ea372",
      function(json){
        var t = parseInt(json.main.temp-273.15);
        infowindow.setContent(
        "<div id='txt', class='display-6'>"+
        "<img src='http://openweathermap.org/img/wn/"+json.weather[0].icon+".png' alt='альтернативный текст'>"+
        "t = "+
        t.toString()+
        "&#8451\n"+  
        "</div>");
        marker.setMap(null);
        marker = new google.maps.Marker({
          position: e.latLng,
          map: map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 0
        }
        });
        infowindow.open(map, marker);
        
    });
    
  });
  
}
