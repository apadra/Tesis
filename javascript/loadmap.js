var customIcons = 'http://labs.google.com/ridefinder/images/mm_20_red.png';
var customIconsBlue = 'http://labs.google.com/ridefinder/images/mm_20_blue.png';
var pos;
var directionsDisplay;
var directionsService;
var map;
var marcadoresGuardados;

var latitudGlobal, longitudGlobal;

$( document ).ready(function() {
	load();


});


// Función load: Encargada de genenrar el mapa dentro del sistema.
    function load() {
		if (navigator.geolocation){              
        		   //enableHighAccuracy:true indica que si la red no esta disponible le pregunta al GPS.
                  navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 1, timeout: 50000, enableHighAccuracy:true});
                                             
                }
                else{
                    alert("Señal no encontrada, es posible que su GPS este desactivado.");
                }
    }
		
	// Función onSuccess: destinada a la creación del mapa y posicionamiento de los marcadores de interes.
	function onSuccess(position){
	  
	  directionsDisplay = new google.maps.DirectionsRenderer();
	  directionsService = new google.maps.DirectionsService();
	  var lat=position.coords.latitude;
      var long=position.coords.longitude;
	  
	  map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(10.499461, -66.785309),
      zoom: 17,
	  disableDefaultUI: false,
      mapTypeId: 'roadmap'
      });
		
	directionsDisplay.setMap(map);	
		
	  var infoWindow = new google.maps.InfoWindow();
	  
	  downloadUrl("XMLgen.php", function(data) {
		var xml = data;
        var markers = xml.documentElement.getElementsByTagName("marker");
		marcadoresGuardados = new Array();
		for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
          var type = markers[i].getAttribute("type");
          var point = new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")),
           									 parseFloat(markers[i].getAttribute("lng")));
          var html = '<div class="infoDiv"><input href="#navigate" class="unimet"  data-idboton="'+markers[i].getAttribute("id")+'" type="button" value="Información"/>'+ "<b></br>" + name +"</div>";
          var icon = customIcons[type] || {};
          
		  var marker = new google.maps.Marker({ map: map, position: point, icon: customIcons});
		  marcadoresGuardados[i] = marker;
          bindInfoWindow(marker, map, infoWindow, html);
        } //fin del for      
	  }); //FIN:downloadUrl
	
	  pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  alert("metros:"+position.coords.accuracy);
	  
      var marker = new google.maps.Marker({
        map: map,
        position: pos,
        icon:customIconsBlue
		
		});
		//map.setCenter(pos);
		
		} //FIN: onSuccess	
					

	function onError(error){
          alert("Por favor active el GPS para ubicarlo con mayor precisión y ubiquese en una zona al aire libre. ");
            }//FIN:onError




// Función JAVASCRIPT: bindInfoWindow, downloadUrl, funciones llamadas por load() para el llenado de marcadores.
    function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
		trazarRuta(marker.getPosition());
		marcadoresColocados();
		latitudGlobal = marker.position.lat();
		longitudGlobal = marker.position.lng();
      });
    }

    function downloadUrl(url, callback) {
		var urlfinal = "http://gpsunimet.webuda.com/"+url;
		$.ajax({
			url: urlfinal,
			method: "GET",
			dataType: "xml",
			success: callback
		});
   }
	
//FIN: Funciones complementarias a la carga del mapa.

    function doNothing() {}
	
	function trazarRuta(positionFin){
		
	var start =pos;
	var end =positionFin;
	var request = {
	origin:start,
	destination:end,
	travelMode: google.maps.TravelMode.WALKING
	 };
	 directionsService.route(request, function(result, status) {
	if (status == google.maps.DirectionsStatus.OK) {
	  directionsDisplay.setDirections(result);
	  zoom:17;
	}
	});
		
	} //FIN: Function trazarRuta()





