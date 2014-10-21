

//Función encargada de vincular el menú de información con los botones dentro de los infowindows.

	$(document).on('pagebeforeshow', '#index', function(){ 
    $(document).on('click', '.unimet', function(){
    	document.getElementById("navigate").innerHTML = ("");
        $( "#navigate" ).panel( "open" );        
    });    
}); //FIN: función de click a botones de infowindow



	//Función encargada de mantener la altura del menú principal separada de la pantalla principal.

	$(function () {
    $('#myPanel').css({
        'height': ($(document).height()) + 'px'
    });
    $(window).resize(function () {
        $('#myPanel').css({
            'height': ($(document).height()) + 'px'
        });
    });
});

//FIN: función de altura menú lateral


//Función encargada de mantener la altura del menú de opciones de marcadores separada de la pantalla principal.

    $(function () {
    $('#navigate').css({
        'height': ($(document).height()) + 'px'
    });
    $(window).resize(function () {
        $('#navigate').css({
            'height': ($(document).height()) + 'px'
        });
    });
});

//FIN: función de altura menú lateral



//Función: mantiene el panel de search independiente al principal

    $(function () {
    $('#search').css({
        'height': ($(document).height()) + 'px'
    });
    $(window).resize(function () {
        $('#search').css({
            'height': ($(document).height()) + 'px'
        });
    });
});

//FIN: función de altura menú lateral

//limpia el contenido de search para una nueva busqueda

function clean(){

$('#filter').val("");
$('#listResult').empty();

}


