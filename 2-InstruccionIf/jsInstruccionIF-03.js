function mostrar()
{
	//tomo la edad  
	var edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18)
	{
		alert("Mayor de edad");
	}
	else
	{
		alert("Menor de edad");
	}

	/*También podría hacerse sin el else:

	var edad;
	var mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	mensaje = "Usted es menor de edad";

	if (edad > 17)
	{
		mensaje = "Usted es mayor de edad";
		alert(mensaje);
	}

	alert(mensaje);
	*/

}//FIN DE LA FUNCIÓN