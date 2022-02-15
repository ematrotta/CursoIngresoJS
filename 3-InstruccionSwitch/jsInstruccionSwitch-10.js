function mostrar()
{
	var estacionIngresada;
	var destino;
	var mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja";
					break;
			}
			break;
		default:
			mensaje = "Se viaja";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN