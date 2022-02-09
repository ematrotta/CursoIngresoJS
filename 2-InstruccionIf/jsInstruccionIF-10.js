function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje;

	nota = Math.round(Math.random()*10+1);

	if (nota == 9 || nota == 10)
	{
		mensaje = "Excelente";
		alert("La nota es " + nota + " y su calificación es " + mensaje);

	}
	else
	{
		if( nota < 9 && nota >= 4)
		{
			mensaje = "Aprobado";
			alert("La nota es " + nota + " y su calificación es " + mensaje);
		}
		else
		{
			mensaje = " Vamos, la proxima se puede";
			alert("La nota es " + nota + mensaje);
			
		}
	}
	

}//FIN DE LA FUNCIÓN