var app = angular.module('starter', ['ionic'])
// app.controller('MyCtrl', function initMap() {
  
var locations = [
      ['Coimbatore', 11.0168, 76.9558, 4],
      ['RS Puram', 11.0104, 76.9499, 5],
      ['Peelamedu', 11.0332, 77.0277, 3],
      ['Singanallur', 10.9891, 77.0227, 2],
      ['Kavundampalayam', 11.0464, 76.9458, 1]
    ];

      function initMap() {
        var coimbatore = new google.maps.LatLng(11.0168,76.9558);
        var map = new google.maps.Map(document.getElementById('map'), {
          // center: {lat: 11.0168, lng: 76.9558},
          center: coimbatore,
          zoom: 8,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}
// });