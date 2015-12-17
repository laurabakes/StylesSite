var address = 'Styles Farmhouse, Rodhuish, Minehead, Somerset, TA24 6QN';  

var stockists = [];

stockists.push({lat:51.145837, lng: -3.413300, name: 'styles', phone:'01984 640255', address:'Styles Farmhouse, Rodhuish, Minehead, Somerset, TA24 6QN'});
stockists.push({lat:50.686047, lng: -3.448280, name: 'darts farm', phone:'01392 687654', address: 'Darts Farm, near topsham' });


  function displayMarkerInfo(){

	 name = marker.name;
	 phone = marker.phone;
	 address = marker.address;			
  }

function initMap() {
  var myLatLng = {lat:51.145837, lng: -3.413300};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:50.686047, lng: -3.448280},
    scrollwheel: false,
    zoom: 8
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
  
  stockists.forEach(function(stocker){
	  
	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: {lat:stocker.lat, lng:stocker.lng},
	    title: stocker.name
	  });
	  marker.addListener('click', displayMarkerInfo);
	  
  });
  
}
