function mostrar()
{
	//tomo la edad  
	var edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13)
	{
		alert("Usted es menor de edad");
	}
	else
	{
		if(edad >= 13 & edad <= 17)
		{
			alert("Usted es adolecente");
		}
		if(edad > 17)
		{
			alert("Usted es mayor de edad");
		}

	}

/*Me pasa cuando ingreso un else dentro del if y le pongo en su argumento
una nueva condición me arroja que el que tiene 15 por ejemplo, no solo es
adolecente sino también mayor de edad*/



}//FIN DE LA FUNCIÓN