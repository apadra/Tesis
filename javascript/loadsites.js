function marcadoresColocados(){

$('.unimet').unbind("click");

    $('.unimet').click(

    function(){
   console.log("el id del boton: " +$(this).attr("data-idboton"));

        var idboton=$(this).attr("data-idboton");

        sitesload("infoXML.php", function(data) {
        var xml = data;
        var sitios = xml.documentElement.getElementsByTagName("sitio");
    
         for (var i = 0; i < sitios.length; i++) {

          var idmarkers = String (sitios[i].getAttribute("ID_Markers"));

          if(idmarkers == idboton){

              var nombre = sitios[i].getAttribute("Nombre");
              var piso = sitios[i].getAttribute("Piso");
              var tipo = sitios[i].getAttribute("Tipo");
              var punto = sitios[i].getAttribute("Referencia");
              var tlf = sitios[i].getAttribute("Telefono");

          $("#navigate").append('<div data-role="collapsible" data-theme="b" data-content-theme="c"><h3> '+ nombre +'</h3><ul data-role="listview" id="infomark"><li> Tipo: '+ tipo +'</li><li> Nivel: '+ piso+' </li><li> Teléfono(s): '+ tlf +'</li> <li> Referencia: '+ punto +' </li></ul></div>');

        }
         
          
        } //FIN: estructura FOR 

         $("#navigate").collapsibleset();
         $("#navigate").listview("refresh");
 
    }); //FIN: sitesload



function sitesload(url, callback) {
    var urlfinal = "http://gpsunimet.webuda.com/"+url;
    $.ajax({
      url: urlfinal,
      method: "GET",
      dataType: "xml",
      success: callback
    });

  } //FIN: function sitesload

 });



} //FIN : Marcadores Colocados

