function mostrar()
{
	var i;
	var numeroIngresado;
	var numerosPares;
	var contadorNumerosPares;

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	contadorNumerosPares = 0;

	for(i = 1;i < numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{
			contadorNumerosPares++;
			numerosPares = i;
			document.write("<br>" + contadorNumerosPares + " - " + numerosPares);
		}
	}
	document.write("<br>" + "Hay " + contadorNumerosPares + " números pares");




}//FIN DE LA FUNCIÓN