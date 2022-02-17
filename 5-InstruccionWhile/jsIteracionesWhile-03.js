/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var mensaje;

	claveIngresada = prompt("Ingrese la Clave");

	while (claveIngresada != "utn750")
	{
		mensaje = "La clave Ingresada es incorrecta";
		alert(mensaje);
		claveIngresada = prompt("Ingrese nuevamente la clave");
	}

	mensaje = "OK";
	alert(mensaje);
	
	
}//FIN DE LA FUNCIÓN
