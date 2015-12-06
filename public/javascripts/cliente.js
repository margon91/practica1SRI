$(document).ready(function(){

	var socket = io.connect('192.168.1.189:3000');//Establezco un socket con el servidor en este caso como es la misma máquina localhost
   	
	var bOcupadas = [];

	socket.on('connect',function() {
		console.log('Conectado con socket');
	});

	socket.on('butacasOcupadas', function(butacas) {
		$("#prueba").append("<p>"+butacas+"</p>");
		for(i=0; i<butacas.length; i++) {
			$("#"+butacas[i]).removeClass("butacaLibre");
			$("#"+butacas[i]).addClass("butacaOcupada");
		}
	});
	/*socket.on('ocupadas',function(butacas) {
		for(i=0; i<butacas.length; i++) {
			butaca = butacas[i];
			$("#prueba").append("<p>"+butaca+"</p>");
			bOcupadas.push(butaca);
		}
	});*/

	

	for(i=0; i<15; i++) {
		for(j=0; j<11; j++) {
			if(bOcupadas.length>0) {
				posActual = i+"-"+j;
				if(jQuery.inArray(posActual, bOcupadas)>-1)
					$("#sala").append("<div id="+i+"-"+j+" class='butaca butacaOcupada'></div>");
				else
					$("#sala").append("<div id="+i+"-"+j+" class='butaca butacaLibre'></div>");
			} else {
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
					butacaComprada = i+"-"+j;
					mandaButaca(butacaComprada);
				}
			}
		}
	});

	var mandaButaca = function(butaca) {
		socket.emit('butaca', butaca);
	};

});