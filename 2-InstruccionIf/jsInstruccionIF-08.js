function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;
	var estadoCivilSelect;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil");
	estadoCivilSelect = estadoCivil.options[estadoCivil.selectedIndex].text;

	if (edad >= 18 && estadoCivilSelect == "Soltero")
	{
		alert("Es soltero y no es menor");
	}




}//FIN DE LA FUNCIÓN