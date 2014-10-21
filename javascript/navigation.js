
function navigateTo(lat, lon, successFn, errorFn){
		    if(device.platform == "Android"){
		        cordova.require('cordova/plugin/phonenavigator').doNavigate(lat, lon, successFn, errorFn);
		        alert("IF de android");
		    }else if(device.platform == "iOS"){
		        var url = "maps:daddr="+lat+","+lon;
		        successFn();
		        window.location = url;
		    }else{
		    	console.error("Unknown platform");
		    }
    	}

		function init() {

				alert("entro init");
				navigateTo('10.499229','-66.784332', function(){
				alert("Successfully opened navigator");
				}, function(errMsg){
					alert("Error opening navigator: "+errMsg);
				})
			});
		}
		$(document).on("deviceready", init);
		</script>