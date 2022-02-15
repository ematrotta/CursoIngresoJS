function mostrar()
{
	var estacionIngresada;
	var destino;
	var porcentaje;
	var mensaje;
	var importeFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	tarifa = 15000;
	mensaje = "Usted debe abonar $";

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				default:
					porcentaje = 0;
					break;
			}
			break;
	}

	importeFinal = tarifa + (tarifa*porcentaje/100);


	
	alert(mensaje+importeFinal);

	

}//FIN DE LA FUNCIÓN