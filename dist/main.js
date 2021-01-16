// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
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