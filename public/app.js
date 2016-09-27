var map;

var handleArthurButtonClick = function(){
  var coords = {  lat: 55.945101, lng: -3.162346};
  map.addListener(coords);
}

var handleMyCurrentLocationClick = function(){
  navigator.geolocation.getCurrentPosition(function(position){
    map.addListener({lat: position.coords.latitude, lng:position.coords.longitude})
  });
}


var initialize = function(){
  var container = document.getElementById('map');
  var center = { lat: 55.945101, lng: -3.162346}
  var zoom = 15;
  map = new Map (container, center, zoom);

  var arthurButton = document.getElementById("take-me-to-the-top-of-edinburgh");
  arthurButton.onclick = handleArthurButtonClick;

  var currentLocationButton = document.getElementById("where-am-i");
  currentLocationButton.onclick = handleMyCurrentLocationClick;

  map.addMarker(center);
  map.addClickEvent();
  
}




window.onload = initialize;
