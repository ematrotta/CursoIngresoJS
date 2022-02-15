function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	

	switch (mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Tiene 31 días";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 días";
			break;
		default:
			mensaje = "Tiene 28 días";
			break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN