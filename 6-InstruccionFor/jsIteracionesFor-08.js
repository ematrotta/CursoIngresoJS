function mostrar()
{
	var numeroIngresado;
	var i;
	var contadorDivisores;

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	contadorDivisores = 0;

	/*
	for(i = 1; i <= numeroIngresado; i++)
	{
		if (numeroIngresado % i == 0)
		{
			contadorDivisores++;
		}
	}
	if(contadorDivisores > 2)
	{
		alert("El número " + numeroIngresado + " NO es PRIMO.");
	}
	else
	{
		alert("El número " + numeroIngresado + " es PRIMO.");
	}
	*/

	for(i = 1; i <= numeroIngresado; i++)
	{
		if (numeroIngresado % i == 0)
		{
			document.write("<br>" + i);
		}
	}


}//FIN DE LA FUNCIÓN