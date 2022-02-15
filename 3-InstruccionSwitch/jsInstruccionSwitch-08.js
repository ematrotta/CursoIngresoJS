function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Usuahia":
			mensaje = "FRIO";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "CALOR";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN