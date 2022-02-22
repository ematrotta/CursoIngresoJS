/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicadornegativos;
	var numero;
	var banderaNegativos;

	sumaPositivos = 0;
	multiplicadornegativos = 1;
	banderaNegativos = false;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));
		if (numero > -1)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			banderaNegativos = true;
			multiplicadornegativos = multiplicadornegativos * numero;
		}
		respuesta = prompt("Si desea salir coloque: Salir").toLowerCase();

	}while(respuesta != "salir");

	if(banderaNegativos == false)
	{
		multiplicadornegativos = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicadornegativos;

}//FIN DE LA FUNCIÓN