<<<<<<< HEAD
// var map, infoWindow;
//     var map2;
//     var userLat;
//     var userLng;
//     var userLoc;
//     var service;
//     var pos;
//     var finalFinalPick;
//     var finalPicks = [];
//     var currentPlaceID;
//     var currentPlaceName;

//     $('#confirm-modal').modal({
//       keyboard: false
//     });

//     function initMap() {
//       map = new google.maps.Map(document.getElementById('map'), {
//         center: new google.maps.LatLng(userLat, userLng),
//         zoom: 15
//       });
//       infoWindow = new google.maps.InfoWindow;

//       console.log(userLoc);


//       //GET USER LOCATION
//       if (navigator.geolocation) {
//         console.log(navigator.geolocation)
//         navigator.geolocation.getCurrentPosition(function (position) {
//           console.log(position)
//           pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };

//           userLat = pos.lat;
//           userLng = pos.lng;
//           console.log(userLat);
//           console.log(userLng);
//           console.log(pos);


//           //SHOWS USER POSITION
//           infoWindow.setPosition(pos);
//           infoWindow.setContent('<p id="uAreHere">YOU<br>ARE<br>HERE<br><p>');
//           infoWindow.open(map);
//           map.setCenter(pos);


//           infowindow = new google.maps.InfoWindow();
//           service = new google.maps.places.PlacesService(map);
//           service.nearbySearch({
//             location: pos,
//             radius: 10000,
//             type: ['restaurant'],
//             keyword: winner,

//           }, callback);

//           function callback(results, status) {
//             if (status === google.maps.places.PlacesServiceStatus.OK) {
//               for (var i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//               }
//               finalPicks.push(results);
//             }
//           }

//           function createMarker(place) {
//             var placeLoc = place.geometry.location;
//             var marker = new google.maps.Marker({
//               map: map,
//               position: place.geometry.location
//             });

//         }
//     }
// }
=======
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJSEi4G-3pJqm6QRJ9lKpjFY1mrFQrijw'
})(MapContainer);

>>>>>>> f3a8006812684d132f48567eac47824e54c5dbd6
