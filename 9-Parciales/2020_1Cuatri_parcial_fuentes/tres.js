function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var flagIngreso;
	var flagTemperatura;
	var siguienteIngreso;
	var temperaturaMaxima;
	var nombreDeLaPersonaConTemperaturaAlta;
	var promedioEdadHombresSolteros;

	var contadorMayoresDeEdad;
	var contadorHombresSolterosOViudos;
	var contadorTerceraEdadConTemperatura;
	var contadorHombresSolteros;
	var contadoHombresViudos;

	var sumaEdadHombresSolteros;

	flagIngreso = true;
	flagTemperatura = true;

	contadorMayoresDeEdad = 0;
	contadorHombresSolteros = 0;
	contadoHombresViudos = 0;
	contadorTerceraEdadConTemperatura = 0;
	sumaEdadHombresSolteros = 0;

	do
	{
		//PIDO NOMBRE
		nombre = prompt("Ingrese el nombre de la persona");

		//PIDO EDAD Y LA VALIDO
		edad = parseInt(prompt("Ingrese la edad de la persona"));
		while(edad < 10 || edad > 100)
		{
			edad = parseInt(prompt("La edad debe ser mayor que 10"));
		}

		//PIDO SEXO Y VALIDO
		sexo = prompt("Ingrese el sexo f o m").toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Solo debe usar f o m para el sexo").toLowerCase();
		}
		
		//PIDO ESTADO CIVIL Y VALIDO
		estadoCivil = prompt("Ingrese estado civil: casado, soltero o viudo").toLowerCase();
		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("El estado civil debe ser casado, soltero o viudo").toLowerCase();
		}

		//PIDO TEMPERATURA Y VALIDO
		temperaturaCorporal = parseInt(prompt("Ingrese la temperatura"));
		while(temperaturaCorporal > 46 || temperaturaCorporal < 34)
		{
			temperaturaCorporal = parseInt(prompt("La temperatura debe estar entre 35 y 45"));
		}
		if(temperaturaCorporal > temperaturaMaxima || flagTemperatura == true)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreDeLaPersonaConTemperaturaAlta = nombre;
			flagTemperatura = false;
		}

		//BANDERA
		siguienteIngreso = prompt("Deses seguir el ingreso: coloque n para NO").toLowerCase();
		if(siguienteIngreso == "n")
		{
			flagIngreso = false;
		}

		//CONTABILIZO CANTIDAD DE VIUDOS MAYORES
		if(edad > 17 && estadoCivil == "viudo")
		{
			contadorMayoresDeEdad++;
		}

		//CONTABILIZO HOMBRES SOLTEROS Y VIUDOS, Y SUMO EDAD DE SOLTEROS
		
		if(sexo == "m")
		{
			switch(estadoCivil)
			{
				case "soltero":
					contadorHombresSolteros++;
					sumaEdadHombresSolteros = sumaEdadHombresSolteros + edad;
					break;
				case "viudo":
					contadoHombresViudos++;
					break;
			}
		}

		//CONTABILIZO PERSONA DE 3RA EDAD CON TEMPERATURA
		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorTerceraEdadConTemperatura++;
		}


	}while(flagIngreso == true);

	contadorHombresSolterosOViudos = contadorHombresSolteros + contadoHombresViudos;

	//a) El nombre de la persona con más temperatura
	alert("El nombre de la persona con la temperatura más alta es: " + nombreDeLaPersonaConTemperaturaAlta);

	//b) Mayores de edad viudos
	alert("Hay " + contadorMayoresDeEdad + " mayores viudos");

	//c) La cantidad de hombres que hay solteros o viudos
	alert("Hay " + contadorHombresSolterosOViudos + " hombres solteros o viudos");

	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	alert("Hay " + contadorTerceraEdadConTemperatura + " personas de 3ra edad con mayor temperatura mayor a 38°");

	//e) El promedio de edad entre los hombres solteros.
	promedioEdadHombresSolteros = (sumaEdadHombresSolteros / contadorHombresSolteros).toFixed(2);
	alert("El promedio de edad de hombres solteros es: " + promedioEdadHombresSolteros);



	





}
