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

}//FIN DE LA FUNCIÓN