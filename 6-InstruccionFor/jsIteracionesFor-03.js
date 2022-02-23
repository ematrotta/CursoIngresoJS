function mostrar()
{
	var contador;
	var repeticiones;
	var mensaje;

	repeticiones = parseInt(prompt("ingrese el número de repeticiones"));


	for(contador = 0; contador < repeticiones ; contador++)
	{
		mensaje = "Hola UTN FRA";
		document.write("<br>" + mensaje);
	}


}//FIN DE LA FUNCIÓN