function mostrar()
{
	var edad;
	var estadoCivil;
	var estadoCivilSelect;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil");
	estadoCivilSelect = estadoCivil.options[estadoCivil.selectedIndex].text;

	if (edad < 18 && estadoCivilSelect !== "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}



}//FIN DE LA FUNCIÓN