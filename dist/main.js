// map
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1uZXQtZGV2IiwiYSI6ImNrazA4aDFyOTBlenMyd2xpYmcyOGhxaXQifQ.ynAJu11M0M_XlQ9qBi0z3Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [4.89, 52.37], // starting position [lng, lat]
zoom: 9 // starting zoom

});
var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.913, 52.35]
      },
      properties: {
        title: 'Mapbox',
        description: 'The Student Hotel.'
      }
    }]
}
// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });

// weather map
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=b7dca5a7c303e1e4c99dfd106d6f0ea5'
function currentWeather(){
  fetch(url)
  .then(response => response.json())
  .then(data => drawWeather(data))
  
  .catch()
}
window.onload = () => {
  currentWeather()
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

	
	document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius +' ' + '&degc';

}
// slide navbar 
const navSlider = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
  burger.classList.toggle('toggle')
})
}
navSlider()
  // scroll to top
  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() < 150) {
            $(".to-top").addClass("show-to-top")
        } else {
            $(".to-top").removeClass("show-to-top")
        }
    })
})