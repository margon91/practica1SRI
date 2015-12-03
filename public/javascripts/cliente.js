$(document).ready(function(){

   var socket=io.connect('localhost:3000');//Establezco un socket con el servidor en este caso como es la misma máquina localhost

	socket.on('connect',function(){
		var saludo="hola, te estoy saludando desde socket.io";
		socket.emit('saludo',saludo); // A modo de ejemplo emito un saludo
	});

	socket.on('msg',function(data){
		$('#prueba').append('<p>' + data.text + '</p>');
	});

	for(i=0; i<15; i++) {
		for(j=0; j<11; j++) {
			$("#sala").append("<div id="+i+"-"+j+" class='butaca butacaLibre'></div>")
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
	})

})