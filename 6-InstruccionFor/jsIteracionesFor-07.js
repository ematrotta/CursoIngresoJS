function mostrar()
{
	var numeroIngresado;
	var i;
	var numeroDivisor;
	var contadorNumeroDivisor;

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	contadorNumeroDivisor = 0;

	for(i = 1;i <= numeroIngresado ; i++)
	{
		if(numeroIngresado % i == 0)
		{
			numeroDivisor = i;
			contadorNumeroDivisor++;
			document.write("<br>" + contadorNumeroDivisor + " - " + numeroDivisor);
		}
	}
	document.write("<br>" + "Hay " + contadorNumeroDivisor + " números divisores.");


}//FIN DE LA FUNCIÓN