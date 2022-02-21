/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	/* EJERCICIO BIEN HECHO
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
	*/

	var alturaEnCm;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombreAlumno;
	var mensaje;
	var contadorIteraciones;
	var sumaAlturas;
	var promedioAltura;
	var contadorSexoF;
	var contadorSexoM;
	var contadorSexoNb;
	var contadorNotaAprobados;
	var contadorMujeresAltura;
	var nombreDeLaPersonaMasAlta;
	var alturaMaxima;
	var primerPersonaConFiebre;
	var edadPrimeraPersonaConFiebre;
	var primerMujerAprobada;
	var nombreDeLaPrimerMujerAprobada;
	var sumaAlturasAprobados;
	var primerHombreMenorDesaprobado;
	var nombrePrimerHombreMenorDesaprobado;

	//CONTADORES
	contadorIteraciones = 0;
	sumaAlturas = 0;
	contadorSexoF = 0;
	contadorSexoM = 0;
	contadorSexoNb = 0;
	contadorNotaAprobados = 0;
	contadorMujeresAltura = 0;
	sumaAlturasAprobados = 0;

	//OTRAS VARIABLES
	alturaMaxima = 0;
	primerPersonaConFiebre = true;
	primerMujerAprobada = true;
	primerHombreMenorDesaprobado = true;

	while(contadorIteraciones < 3)
	{
		contadorIteraciones++;

		//PIDO ALTURA Y VALIDO QUE SEA ENTRE 0 Y 250
		alturaEnCm = parseInt(prompt(contadorIteraciones + " - Ingrese una altura en cm"));
		while(alturaEnCm < 0 || alturaEnCm > 250)
		{
			mensaje = contadorIteraciones + " - Ingrese una altura entre 0 y 250";
			alturaEnCm = parseInt(prompt(mensaje));
		}

		//PIDO EDAD Y VALIDO QUE SEA MAYOR A 0
		edad = parseInt(prompt(contadorIteraciones + " - Ingrese la edad"));
		while(edad < 17)
		{
			mensaje = contadorIteraciones + " - Ingrese una edad mayor a 17";
			edad = parseInt(prompt(mensaje));
		}

		//PIDO TEMPERATURA Y VALIDO QUE SEA ENTRE 35 Y 45
		temperatura = parseInt(prompt(contadorIteraciones + " - Ingrese una temperatura"));
		while(temperatura < 35 || temperatura > 45)
		{
			mensaje = contadorIteraciones + " - La temperatura debe ser entre 35 y 45";
			temperatura = parseInt(prompt(mensaje));
		}

		//PIDO SEXO Y VALIDO QUE SEA SOLO F, M O NB
		sexo = prompt(contadorIteraciones + " - Ingrese el sexo f, m o nb").toLowerCase();
		while(sexo != "f" && sexo != "m" && sexo !="nb")
		{
			mensaje = contadorIteraciones + " - Ingrese solo f, m o nb para el sexo";
			sexo = prompt(mensaje).toLocaleLowerCase();
		}

		//CONTABILIZO CANTIDAD DE F, M, NB
		switch(sexo)
		{
			case "f":
				contadorSexoF++;
				break;
			case "m":
				contadorSexoM++;
				break;
			case "nb":
				contadorSexoNb++;
				break;
		}

		//CONTABILIZO CANTIDAD DE MUJERES CON ALTURA MAYOR A 190
		if(sexo == "f" && alturaEnCm >190)
		{
			contadorMujeresAltura++;
		}


		//PIDO LA NOTA Y VALIDO QUE ESTE ENTRE 1 Y 10
		nota = parseInt(prompt(contadorIteraciones + " - Ingrese la nota obtenida"));
		while(nota < 1 || nota > 10)
		{
			mensaje = contadorIteraciones + " - Ingrese un nro entre 1 y 10";
			nota = parseInt(prompt(mensaje));
		}

		//PIDO NOMBRE DEL ALUMNO
		nombreAlumno = prompt(contadorIteraciones + " - Ingrese el nombre").toString();
		while(nombreAlumno == "")
		{
			mensaje = " - Ingrese un nombre correcto";
			nombreAlumno = prompt(contadorIteraciones + mensaje).toString();
		}

		//CONTABILIZO CANTIDAD DE APROBADOS
		if(nota > 6)
		{
			contadorNotaAprobados++;
			// NOMBRE DE LA 1ER MUJER APROBADA
			if(sexo == "f" && primerMujerAprobada == true)
			{
				nombreDeLaPrimerMujerAprobada = nombreAlumno;
				primerMujerAprobada = false;
			}
			//SUMA DE ALTURAS DE APROBADOS
			sumaAlturasAprobados = sumaAlturasAprobados + alturaEnCm;
		}
		else
		{
			//BUSCO EL NOMBRE DEL 1ER HOMBRE DESAPROBADO Y QUE MIDE MENOS DE 160CM
			if(sexo == "m" && primerHombreMenorDesaprobado == true && alturaEnCm < 160)
			{
				nombrePrimerHombreMenorDesaprobado = nombreAlumno;
				primerHombreMenorDesaprobado = false;
			}
		}

		//SUMO LAS ALTURAS
		sumaAlturas = sumaAlturas + alturaEnCm;

		//NOMBRE DE LA PERSONA MÁS ALTA
		if (alturaEnCm > alturaMaxima)
		{
			alturaMaxima = alturaEnCm;
			nombreDeLaPersonaMasAlta = nombreAlumno;
		}
		//EDAD DE LA 1ER PERSONA CON FIEBRE NO ME SALE!!!!
		if(temperatura > 37)
		{
			while(primerPersonaConFiebre == true)
			{
				edadPrimeraPersonaConFiebre = edad;
				primerPersonaConFiebre = false;
			}

		}


	}

	//1RA PARTE

	promedioAltura = (sumaAlturas / contadorIteraciones).toFixed(2);
	alert("El promedio de las alturas es " + promedioAltura); //a)
	alert("Hay " + contadorSexoF + " F, " + contadorSexoM + " M, " + contadorSexoNb + " NB."); //b)
	alert("Hay " + contadorNotaAprobados + " aprobados."); //c)
	alert("Hay " + contadorMujeresAltura + " muejeres que superan los 190 cm"); //d)

	//2DA PARTE

	// e) Genero con más alumnos
	if(contadorSexoF > contadorSexoM && contadorSexoF > contadorSexoNb)
	{
		mensaje = "El sexo femenino tiene más alumnos";
	}
	else
	{
		if(contadorSexoM > contadorSexoNb)
		{
			mensaje = "El sexo masculino tiene más alumnos";
		}
		else
		{
			mensaje = "El sexo no binario tiene más alumnos";
		}
	}
	alert(mensaje);

	// f) El nombre de la persona más alta
	alert("El nombre de la persona más alta es "+ nombreDeLaPersonaMasAlta);

	//g) Edad de la 1er persona con fiebre
	alert("La edad de la 1er persona con fiebre es: " + edadPrimeraPersonaConFiebre);


	//3RA PARTE

	//h) Nombre de la 1er mujer aprobada
	alert("La primer mujer aprobada es: " + nombreDeLaPrimerMujerAprobada);

	//i) Altura promedio de los aprobados
	alert("El promedio de altura de aprobados es: " + (sumaAlturasAprobados/contadorNotaAprobados).toFixed(2));

	//j) Nombre del 1er hombre, que mide menos de 160 cm y está desaprobado.
	alert("El nombre del 1er hombre desaprobado menor a 160 cm es: " + nombrePrimerHombreMenorDesaprobado);


	//4TA PARTE

	//k) El porcentaje de alumnos aprobados sobre el total de alumnos
	alert("El porcentaje de alumnos aprobados sobre el total es : " + (contadorNotaAprobados / contadorIteraciones * 100).toFixed(0) + "%");
	
	//l) La nota y el nombre del primer varon más alto de 200cm
	



























}//FIN DE LA FUNCIÓN