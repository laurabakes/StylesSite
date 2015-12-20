var address = 'Styles Farmhouse, Rodhuish, Minehead, Somerset, TA24 6QN';  

var stockists = [];

stockists.push({lat:51.145837, lng: -3.413300, name: 'styles', phone:'01984 640255', address:'Styles Farmhouse, Rodhuish, Minehead, Somerset, TA24 6QN'});

stockists.push({lat:51.001656, lng: -3.156865, name: 'Rumwell Farm Shop', phone:'01823 461599', address: 'Wellington Road, Rumwell, Nr Taunton, Somerset TA4 1EJ' });
stockists.push({lat:51.201797,  lng: -3.465131, name: 'Stuart Lowens', phone:'01643 706034', address: '4B Hawksworth Rd,Minehead, Somerset TA24 5BZ' });
stockists.push({lat:51.149849, lng:  -2.545090, name: 'Jon Thorners', phone:'01749 830138', address: 'Pylle, Shepton Mallet, BA4 6TA' });
stockists.push({lat:51.1663767, lng: -3.2280486, name: 'Cricketer Farm Shop', phone:'01278 732207', address: 'Stowey Court Farm, Bridgwater, TA5 1LL' });
stockists.push({lat:51.1783652, lng: -3.3078825, name: 'Doniford Farm Park', phone:'01984 634825', address: 'Doniford Rd, Doniford, Watchet, Somerset, TA23 0TQ' });
stockists.push({lat:51.0369751, lng: -2.8317137, name: 'Evans the Butchers', phone:'01458 250778', address: '6 Parret Close Langport Somerset TA10 9PG' });
stockists.push({lat:50.9049034, lng: -2.6387997, name: 'Goose Slade Farm Shop', phone:'01935 863735', address: 'Goose Slade Farm, East Coker, Yeovil, Somerset, A22 9QJ' });
stockists.push({lat:50.4707915, lng: -3.5410568, name: 'Gribbles Butchers', phone:'01803 294698', address: '290 Union St, Torquay, TQ2 5QZ' });
stockists.push({lat:50.686047, lng: -3.448280, name: 'Highland Farm Shop', phone:'', address: 'Smeatharpe Honiton Devon EX14 9RF' });
stockists.push({lat:50.6979254, lng: -3.4349321, name: 'Kenniford Farm Shop', phone:'01392 875938', address: 'Clyst St Mary, Exeter, EX5 1AQ' });
stockists.push({lat:50.9172291, lng: -3.361995, name: 'Little Turberfield Farm Shop', phone:'01884 820908', address: 'Tiverton Parkway, Sampford Peverell, Devon, EX16 7EH' });
stockists.push({lat:50.5609737, lng: -3.6669257, name: 'Liverton Post Office', phone:'01626 821234', address: 'A38, Liverton, Newton Abbot, Devon, TQ12 6EY' });
stockists.push({lat:51.1443643, lng: -2.9746737, name: 'Mole Valley Farmers – Bridgwater', phone:'01278 424240', address: 'Bath Road, Bawdrip, Bridgwater, Somerset, TA7 8PE' });
stockists.push({lat:51.0272364, lng: -3.8389267, name: 'Mole Valley Farmers – South Molton', phone:'01769 574477', address: 'Pathfields Business Park, South Molton, Devon, EX36 3LH' });
stockists.push({lat:50.8070652, lng: -3.6238992, name: 'No Man’s Land Farm Shop', phone:'', address: 'Nomandsland, Crediton, Devon, EX17 1DH' });
stockists.push({lat:51.0390674, lng: -3.0954343, name: 'Pyrland farm Shop', phone:'01823 334148', address: 'Pyrland Farm Cottage, Cheddon Rd, Taunton, Somerset, A2 7QX' });
stockists.push({lat:50.9776444, lng: -3.2311557, name: 'Rosies Larder', phone:'01823 617620', address: '29 Fore St, Wellington, TA21 8AG' });
stockists.push({lat:51.0161434, lng: -2.8175467, name: 'School Farm', phone:'', address: 'Muchelney, Langport, Somerset, TA10 0DN' });
stockists.push({lat:51.1615337, lng: -3.3237379, name: 'Somerset Farmhouse Kitchen', phone:'01984 632450', address: 'Williton, Taunton, Somerset, TA4 4SL' });
stockists.push({lat:51.1256543, lng: -3.1082012, name: 'Spaxton Community Stores', phone:'01278 671487', address: 'High Street, Spaxton, Somerset, TA5 1BS' });
stockists.push({lat:51.0816589, lng: -3.4152121, name: 'Roadwater Community Shop', phone:'01984 640296', address: 'Roadwater, Watchet, Somerset, TA3 0QY' });
stockists.push({lat:51.0402213, lng: -3.5525518, name: 'Tantivy', phone:'01398 323465', address: '16 Fore St, Dulverton, TA22 9EX'});
stockists.push({lat:51.0422646, lng: -3.3154664, name: 'Thornes Butchers', phone:'01984 623270', address: 'Thornes Butchers, 5 West St, Wiveliscombe, Taunton TA4 2JP' });
stockists.push({lat:50.9032874, lng: -3.4938955, name: 'Too Goods', phone:'01884 243421', address: '11 West Exe, North Tiverton, Devon, EX16 5LX' });
stockists.push({lat:51.0614932, lng: -3.1906372, name: 'Mr C Trott Butchers', phone:'01823 432207', address: '5 West St, Bishops Lydeard, Taunton, TA4 3AU' });
stockists.push({lat:51.1384916, lng: -3.5425148, name: 'Budgens', phone:'01643 841221', address: 'Wheddon Cross, Minehead, Somerset, TA24 7DR' });
stockists.push({lat:51.1799437, lng: -3.524039, name: 'Wooton Courtenay Village Store', phone:'', address: 'Wooton Courtenay, Minehead, Somerset, TA24 8RH' });


function initMap() {
  var myLatLng = {lat:51.145837, lng: -3.413300};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:50.686047, lng: -3.448280},
    scrollwheel: false,
    zoom: 8
  });


  stockists.forEach(function(stocker){
	  
	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: {lat:stocker.lat, lng:stocker.lng},
	    title: stocker.name
	  });

	var infowindow = new google.maps.InfoWindow({
		content: '<div style="color:#777;" id="mapInfoContent">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<span style="font-size:1.5em;">'+
	  stocker.name +
	  '</span>'+
      '<div style="font-size:1em;">'+
      
		'<p style="font-size:1em;"><b>'+stocker.phone +'</b></p></br>'+  stocker.address +
	  '</div>'
	  });

	  marker.addListener('click', function() {
		infowindow.open(map, marker);
	  });
	   
  });
  
}
