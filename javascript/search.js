
//función que envia los caracteres del searchbar a la base de datos

function estado(value){


$.post("http://gpsunimet.webuda.com/searchList.php", {estado:value}, function(data){

$("#listResult").html(data);
$('#listResult').listview('refresh');


});


} //FIN: function estado


function routing(value){


	console.log(value);



}