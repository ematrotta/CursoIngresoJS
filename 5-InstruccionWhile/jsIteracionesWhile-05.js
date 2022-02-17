/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var mensaje;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLocaleLowerCase();

	// Forma 1 WHILE + IF
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		mensaje = "Colocar F o M unicamente";
		document.getElementById("txtIdSexo").value = mensaje;
		sexoIngresado = prompt("Ingrese correctamente F o M");
	}
	if(sexoIngresado == "m")
	{
		mensaje = "Su sexo es masculino";
	}
	else
	{
		mensaje = "Su sexo es femenino";
	}
	document.getElementById("txtIdSexo").value = mensaje;


}//FIN DE LA FUNCIÓN