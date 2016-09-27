var initialize = function(){
  var container = document.getElementById('map');
  var center = { lat: 55.945101, lng: -3.162346}

  var map = new Map(container, center, 10);
  map.addMarker(center);
  map.addClickEvent();
}




window.onload = initialize;