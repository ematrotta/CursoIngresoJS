function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	var mensaje;

	switch (mesDelAño)
	{
		case "Julio":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensaje = "Falta para el invierno.";
			break;
	}
	alert(mensaje);




}//FIN DE LA FUNCIÓN