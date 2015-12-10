module.exports=function(io){

	var butacas = [];

	var guardaButacas = function(butaca) {
		butacas.push(butaca);
	};
	   
	io.sockets.on ('connection',function(socket) {
		io.sockets.emit('butacasOcupadas', butacas);
		socket.on('butaca', function(butaca) {
			for(i=0; i<butacas.length; i++) {
				if(butacas[i] == butaca) {
					msg = "Acaban de comprar ese asiento."
					socket.emit('butacaComprada', msg);
				}
			}
			guardaButacas(butaca);
			io.sockets.emit('butacasOcupadas', butacas);			
	  	});
	}); 
}