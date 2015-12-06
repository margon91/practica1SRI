module.exports=function(io){

	var butacas = [];

	var guardaButacas = function(butaca) {
		butacas.push(butaca);
	};
	   
	io.sockets.on ('connection',function(socket) {
		io.sockets.emit('butacasOcupadas', butacas);
		socket.on('butaca', function(butaca) {
			console.log(butaca);
			guardaButacas(butaca);
			io.sockets.emit('butacasOcupadas', butacas);
	  	});
	});
}