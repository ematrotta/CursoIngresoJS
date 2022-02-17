function mostrar()
{
	var contador;
	var sumaAcumulada;
	var numeroIngresado;

	contador = 0;
	sumaAcumulada = 0;

	while(contador < 5)
	{
		contador++;
		numeroIngresado = parseInt(prompt("Ingrese el " + contador + "° Número"));
		sumaAcumulada = sumaAcumulada + numeroIngresado;
	}

	document.getElementById("txtIdSuma").value = sumaAcumulada;
	document.getElementById("txtIdPromedio").value = (sumaAcumulada/contador).toFixed(2)

	
}//FIN DE LA FUNCIÓN