$(document).ready(function(){

   var socket=io.connect('localhost:3000');//Establezco un socket con el servidor en este caso como es la misma máquina localhost

	socket.on('connect',function(){
		var saludo="hola, te estoy saludando desde socket.io";
		socket.emit('saludo',saludo); // A modo de ejemplo emito un saludo
	});

	socket.on('msg',function(data){
		$('#sala').append('<p>' + data.text + '</p>');
	});

})