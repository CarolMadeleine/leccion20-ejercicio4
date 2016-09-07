window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var segundos = parseInt(document.getElementById("segundos").value);
		var resultado = setInterval(color, segundos*1000);
		document.getElementById("segundos").value = "";

	});
		function color(){
			document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		}
});