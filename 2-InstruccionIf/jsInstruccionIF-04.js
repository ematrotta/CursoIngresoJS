function mostrar()
{
	//tomo la edad  
	var edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 13 && edad <= 17 )
	{
		alert("Usted es un adolecente");
	}

}//FIN DE LA FUNCIÓN