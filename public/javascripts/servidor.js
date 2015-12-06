module.exports=function(io){

	var butacas = [];
	/*butacas.push('7-7');	
	butacas.push('7-6');	
	butacas.push('7-5');	
	butacas.push('7-4');	
	butacas.push('1-3');	
	butacas.push('1-4');	
	butacas.push('9-5');	
	butacas.push('9-6');	
	butacas.push('5-2');	
	butacas.push('5-3');	
	butacas.push('5-4');	
	butacas.push('5-5');*/
   
	io.sockets.on ('connection',function(socket) {
	  	//socket.on('saludo', function(saludo){
	  	//	butacas.push(saludo);
	  		//var msg = "esto es una prueba";
	  		//socket.emit('msg', {text: 'esto es una prueba' });
	  		//socket.emit('ocupadas', butacas);
	  		//io.socket.emit(  ); //a partir de aqui puedo empezar a emitir mensajes a los clientes
	  	//});
		socket.on('butaca', function(butaca) {
			console.log(butaca);
			butacas.push(butaca);
			io.sockets.emit('butacasOcupadas', butacas);
	  	//	butacas.push(saludo);
	  		//var msg = "esto es una prueba";
	  		//socket.emit('msg', {text: 'esto es una prueba' });
	  		//socket.emit('ocupadas', butacas);
	  		//io.socket.emit(  ); //a partir de aqui puedo empezar a emitir mensajes a los clientes
	  	});
	});
}