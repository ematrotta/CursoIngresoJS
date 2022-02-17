/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var mensaje;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9 inclusive."));

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Número incorrecto. Vuelva a ingresar");
	}
	mensaje = "Su número es correcto.";
	document.getElementById("txtIdNumero").value = mensaje;
	

}//FIN DE LA FUNCIÓN