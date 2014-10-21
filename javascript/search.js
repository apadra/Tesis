
//función que envia los caracteres del searchbar a la base de datos

function estado(value){


$.post("http://gpsunimet.webuda.com/searchList.php", {estado:value}, function(data){

$("#listResult").html(data);
$('#listResult').listview('refresh');


});


} //FIN: function estado


function buscarYAbrirPin(etiqueta){
	var lat = $(etiqueta).attr("data-lat");
	var lng = $(etiqueta).attr("data-lng");
	var pin = buscarPin(lat, lng);
	google.maps.event.trigger(pin, 'click');
}

function buscarPin(lat, lng){
	for(var i=0;i<marcadoresGuardados.length;i++){
		var latitud = marcadoresGuardados[i].position.lat().toFixed(6);
		var longitud = marcadoresGuardados[i].position.lng().toFixed(6);
		if(latitud== lat && longitud==lng){
			return marcadoresGuardados[i];
		}
	}
}