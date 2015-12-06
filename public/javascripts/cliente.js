$(document).ready(function(){

	//var bOcupadas = [];

	var socket = io.connect('192.168.1.189:3000');//Establezco un socket con el servidor en este caso como es la misma máquina localhost
   	
	socket.on('connect',function(){
		var saludo="hola, te estoy saludando desde socket.io";
		socket.emit('saludo',saludo); // A modo de ejemplo emito un saludo
	});

	socket.on('ocupadas',function(butacas){
		$('#prueba').append('<p>' + butacas + '</p>');
		dibujaSala(butacas);
	});
	
	function dibujaSala(bOcupadas) {
		for(i=0; i<15; i++) {
			for(j=0; j<11; j++) {
				if(bOcupadas.length>0) {
					posActual = i+"-"+j;
					if(jQuery.inArray(posActual, bOcupadas)>-1)
						$("#sala").append("<div id="+i+"-"+j+" class='butaca butacaOcupada'></div>");
					else
						$("#sala").append("<div id="+i+"-"+j+" class='butaca butacaLibre'></div>");
				} else
					$("#sala").append("<div id="+i+"-"+j+" class='butaca butacaLibre'></div>");
			}
		}
	}

	$(".butaca").click(function() {
		if($(this).hasClass("butacaLibre")) {
			$(this).removeClass("butacaLibre");
			$(this).addClass("butacaSeleccionada");
		} else if($(this).hasClass("butacaSeleccionada")) {
			$(this).removeClass("butacaSeleccionada");
			$(this).addClass("butacaLibre");
		} else if($(this).hasClass("butacaOcupada")) {
			alert("Este es mi sitio. Buscate tu propio sitio");
		} else
			console.log("Ha habido un error");
	});

	$("#comprar").click(function() {
		for(i=0; i<15; i++) {
			for(j=0; j<11; j++) {
				if($("#"+i+"-"+j).hasClass("butacaSeleccionada")) {
					$("#"+i+"-"+j).removeClass("butacaSeleccionada");
					$("#"+i+"-"+j).addClass("butacaOcupada");
				}
			}
		}
	});
});