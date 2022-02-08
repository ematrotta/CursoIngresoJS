function mostrar()
{
	//tomo la edad  
	/*var edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18)
	{
		alert("Mayor de edad");
	}
	*/
	var auto;
	var marca;
	
	auto = document.getElementById("txtIdEdad").value;
	if (auto.toLowerCase() == "auto")
	{
		marca = prompt("Ingresar una marca de auto: ");
		alert(marca);
	}


}//FIN DE LA FUNCIÓN