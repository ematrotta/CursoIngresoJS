/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	//EJERCICIO 26-02

	//VARIABLES DE INGRESO DE DATOS
	var alturaEnCm;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var nota;
	var nombre;
	var respuestaSalida;
	
	//VRAIABLES BANDERAS
	var flagIngreso;
	var flagAlumnoAprobado;
	var flagMaxTemperatura;
	var flagNbMasJoven;
	var flagPrimerHombreDesaprobadoYMenos160Cm;

	//VARIABLES CONTADOR Y ACUMULADORES
	var contadorMujeres;
	var contadorHombres;
	var contadorNb;
	var contadorPersonasConFiebre;
	var contadorPersonasSinFiebre;
	var sumaEdadMujeres;
	var sumaEdadHombres;
	var sumaEdadNb;
	var contadorPersonas;
	var contadorPersonasDesaprobadas;

	//VARIABLES DE FORMULAS
	var promedioEdadMujeres;
	var promedioEdadHombres;
	var promedioEdadNb;

	//VARIABLES RESPUESTA
	var respuestaParteUno;
	var respuestaParteDos;
	var respuestaParteTres;

	//OTRAS VARIABLES
	var maximaTemperatura;
	var nombreMaximaTemperatura;
	var edadMaximaTemperatura;
	var minEdadNb;
	var alturaNbMasJoven;
	var notaNbMasJoven;
	var maxAlturaMujerAprobada;
	var nombreMujerAprobadaMasAlta;
	var porcentajeDePersonasDesaprobadas;
	var nombrePrimerHombreDesaprobadoYMenos160Cm;

	//DEFINICION DE BANDERAS
	flagIngreso = true;
	flagAlumnoAprobado = true;
	flagMaxTemperatura = true;
	flagNbMasJoven = true;
	flagMujerMasAltaAprobada = true;
	flagPrimerHombreDesaprobadoYMenos160Cm = true;

	//DEFINICION CONTADORES Y ACUMULADORES
	contadorMujeres = 0;
	contadorHombres = 0;
	contadorNb = 0;
	contadorPersonasConFiebre = 0;
	contadorPersonasSinFiebre = 0;
	sumaEdadHombres = 0;
	sumaEdadMujeres = 0;
	sumaEdadNb = 0;
	contadorPersonas = 0;
	contadorPersonasDesaprobadas = 0;

	do
	{
		//INGRESO LA ALTURA Y VALIDO
		alturaEnCm = parseInt(prompt("Ingrese la altura en cm"));
		while(alturaEnCm < 0 || alturaEnCm > 250)
		{
			alturaEnCm = parseInt(prompt("La altura debe estar entre 0 y 250"));
		}

		//INGRESO LA EDAD Y VALIDO
		edad = parseInt(prompt("Ingrese la edad"));
		while(edad < 18 || edad > 80)
		{
			edad = parseInt(prompt("La edad debe estar entre los 18 y los 80 años"));	
		}

		//INGRESO LA TEMPERATURA Y VALIDO
		temperaturaCorporal = parseInt(prompt("Ingrese la temperatura corporal"));
		while(temperaturaCorporal < 35 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = parseInt(prompt("La temperatura debe estar entre los 35 y 45°"));	
		}
		//CONTABILIZO PERSONAS CON FIEBRE b)
		if(temperaturaCorporal > 37)
		{
			contadorPersonasConFiebre++;
		}
		//CONTABILIZO PERSONAS SIN FIEBRE b)
		else
		{
			contadorPersonasSinFiebre++;
		}


		//INGRESO EL SEXO Y VALIDO
		sexo = prompt("Ingrese el sexo con f, m o nb").toLowerCase();
		while(sexo != "m" && sexo != "f" && sexo != "nb")
		{
			sexo = prompt("El sexo debe ser f, m o nb");	
		}

		//INGRESO LA NOTA Y VALIDO
		nota = parseInt(prompt("Ingrese la nota"));
		while(nota > 10 || nota < 1)
		{
			nota = parseInt(prompt("Ingrese una nota del 1 al 10"));	
		}
		//PERSONAS QUE DESAPROBARON
		if(nota < 7)
		{
			contadorPersonasDesaprobadas++;
		}
		else
		{
			//1ER ALUMNO APROBADO
			if(flagAlumnoAprobado == true)
			{
				PrimerAlumnoAprobado = nombre;
				flagAlumnoAprobado = false;
			}
		}

		//INGRESO EL NOMBRE DE LA PERSONA
		nombre = prompt("Ingrese el nombre");

		//CONTABILIZO PERSONAS POR SEXO Y ACUMULO LAS EDADES:
		switch(sexo)
		{
			case "f":
				contadorMujeres++;
				sumaEdadMujeres += edad;
				//MUJER APROBADA MAS ALTA
				if(nota > 6)
				{
					if(alturaEnCm > maxAlturaMujerAprobada || flagMujerMasAltaAprobada ==true)
					{
						maxAlturaMujerAprobada = alturaEnCm;
						nombreMujerAprobadaMasAlta = nombre;
						flagMujerMasAltaAprobada = false;
					}
				}
				else
				{
					nombreMujerAprobadaMasAlta = "Ninguna Mujer esta desaprobada";
				}
				break;
			case "m":
				contadorHombres++;
				sumaEdadHombres += edad;
				if(alturaEnCm < 160 && nota < 7)
				{
					if(flagPrimerHombreDesaprobadoYMenos160Cm == true)
					{
						nombrePrimerHombreDesaprobadoYMenos160Cm = nombre;
						flagPrimerHombreDesaprobadoYMenos160Cm = false;
					}
				}
				else
				{
					nombrePrimerHombreDesaprobadoYMenos160Cm = "No hay hombres Desaprobados que miden menos de 160cm"
				}
				break;
			case "nb":
				contadorNb++;
				sumaEdadNb += edad;
				//SACO ALTURA Y NOTA DEL NB MAS JOVEN
				if(edad < minEdadNb || flagNbMasJoven ==true)
				{
					minEdadNb = edad;
					alturaNbMasJoven = alturaEnCm;
					notaNbMasJoven = nota;
					flagNbMasJoven = false;
				}
				break;
		}	
		//MAXIMA TEMPERATURA, NOMBRE Y EDAD
		if(temperaturaCorporal > maximaTemperatura || flagMaxTemperatura == true)
		{
			maximaTemperatura = temperaturaCorporal;
			nombreMaximaTemperatura = nombre;
			edadMaximaTemperatura = edad;
			flagMaxTemperatura = false;
		}

		//BANDERA DE SALIDA
		respuestaSalida = prompt("Desea salir?: Marque s").toLowerCase();
		if(respuestaSalida == "s")
		{
			flagIngreso = false;
		}

		contadorPersonas++;

	}while(flagIngreso == true);

	//PROMEDIOS DE EDAD POR SEXO
	promedioEdadHombres = (sumaEdadHombres / contadorHombres).toFixed(2);
	promedioEdadMujeres = (sumaEdadMujeres / contadorMujeres).toFixed(2);
	promedioEdadNb = (sumaEdadNb / contadorNb).toFixed(2);

	//PORCENTAJE PERSONAS DESAPROBADAS SOBRE EL TOTAL
	porcentajeDePersonasDesaprobadas = (contadorPersonasDesaprobadas / contadorPersonas * 100).toFixed(0)+"%";

	//PARTE 1
	respuestaParteUno = "Hay " + contadorMujeres + " mujeres \nHay " + contadorPersonasConFiebre + " personas con fiebre \nHay " + contadorPersonasSinFiebre + " personas sin fiebre \nPromedio edad Hombres: " + promedioEdadHombres + "\nPromedio Edad Mujeres: " + promedioEdadMujeres + "\nPromedio Edad No Binarios: " + promedioEdadNb;

	//PARTE 2
	respuestaParteDos = "El primer alumno aprobado es: "+PrimerAlumnoAprobado + "\nLa persona con mayor temperatura es: " + nombreMaximaTemperatura + " y tiene " + maximaTemperatura + "°\nLa altura del NB más joven es: " + alturaNbMasJoven + " y su nota es "+ notaNbMasJoven;

	//PARTE 3
	respuestaParteTres = "El nombre de la mujer más alta que desaprobó es: " + nombreMujerAprobadaMasAlta + "\nEl porcentaje de las personas desaprobadas sobre el total es: " + porcentajeDePersonasDesaprobadas + "\nEl nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado: " + nombrePrimerHombreDesaprobadoYMenos160Cm;

	alert(respuestaParteUno + "\n" + respuestaParteDos + "\n" + respuestaParteTres);

}
//FIN DE LA FUNCIÓN