/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicadornegativos;
	var numero;

	sumaPositivos = 0;
	multiplicadornegativos = 1;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));
		if (numero > -1)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			multiplicadornegativos = multiplicadornegativos * numero;
		}
		respuesta = prompt("Si desea salir coloque: Salir");
		respuesta.toLowerCase();

	}while(respuesta != "salir");

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicadornegativos;

}//FIN DE LA FUNCIÓN