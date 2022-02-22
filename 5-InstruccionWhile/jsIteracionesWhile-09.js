/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var maxNumeroIngresado;
	var minNumeroIngresado;
	var respuesta;

	maxNumeroIngresado = 0;
	minNumeroIngresado = 0;

	do
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		if(numeroIngresado > maxNumeroIngresado)
		{
			maxNumeroIngresado = numeroIngresado;
		}
		else
		{
			if(numeroIngresado < minNumeroIngresado)
			{
				minNumeroIngresado = numeroIngresado
			}
		}
		respuesta = prompt("Si desea salir coloque la letra: S").toLowerCase();

	}while(respuesta != "s");

	document.getElementById("txtIdMaximo").value = maxNumeroIngresado;
	document.getElementById("txtIdMinimo").value = minNumeroIngresado;

}//FIN DE LA FUNCIÓN