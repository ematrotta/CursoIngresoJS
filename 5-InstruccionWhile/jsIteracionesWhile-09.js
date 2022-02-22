/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var maxNumeroIngresado;
	var minNumeroIngresado;
	var respuesta;
	var flag;

	flag = true;

	do
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		if(numeroIngresado > maxNumeroIngresado || flag == true)
		{
			maxNumeroIngresado = numeroIngresado;
	
		}
		if(numeroIngresado < minNumeroIngresado || flag == true)
		{
			minNumeroIngresado = numeroIngresado
		}
		respuesta = prompt("Si desea salir coloque la letra: S").toLowerCase();

		flag = false;

	}while(respuesta != "s");

	document.getElementById("txtIdMaximo").value = maxNumeroIngresado;
	document.getElementById("txtIdMinimo").value = minNumeroIngresado;

}//FIN DE LA FUNCIÓN