module.exports=function(io){
   
	io.sockets.on ('connection',function(socket){
	  	socket.on('saludo', function(saludo){
	  		console.log(saludo);
	  		//var msg = "esto es una prueba";
	  		socket.emit('msg', {text: 'esto es una prueba' });
	  		//io.socket.emit(  ); //a partir de aqui puedo empezar a emitir mensajes a los clientes
	  	});
	})

}