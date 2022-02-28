function mostrar()
{
	var flagIngreso;
	var flagMaximaTemperaturaCorporal;
	var i;

	var nombre;
	var nacionalidad;
	var edad;
	var estadoCivil;
	var temperaturaCorporal;

	var contadorSolterosMayoresDeEdad;
	var contadorMujeresSolterasoViudas;
	var contadorMujeresCasadas;
	var contadorPersonasTerceraEdadConFiebre;
	var sumaEdadMujeresCasadas;
	var nacionalidadMaximaTemperaturaCorporal;
	var maxTemperaturaCorporal;
	var promedioEdadMujeresCasadas;



	flagIngreso = true;
	flagMaximaTemperaturaCorporal = true;
	i = 1;

	contadorSolterosMayoresDeEdad = 0;
	contadorMujeresSolterasoViudas = 0;
	contadorPersonasTerceraEdadConFiebre = 0;
	contadorMujeresCasadas = 0;
	do
	{
		nombre = prompt(i + " - Ingrese el nombre");
		while(nombre == "")
		{
			nombre = prompt(i + " - Ingrese el nombre");
		}
		nacionalidad = prompt(i + " - Ingrese nacionalidad");
		while(nacionalidad == "")
		{
			nacionalidad = prompt(i + " - Ingrese nacionalidad");
		}

		edad = parseInt(prompt(i + " - Ingrese la edad"));
		while(edad < 0)
		{
			edad = parseInt(prompt(i + " - La edad debe ser mayor que 0"));
		}

		estadoCivil = prompt(i + " - Ingrese el estado civil.").toLowerCase();
		while(estadoCivil !="casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
		{
			estadoCivil = prompt(i + " - El estado civil debe ser casado, soltero o viudo").toLowerCase();
		}

		sexo = prompt(i + " - Ingrese el sexo").toLowerCase();
		while(sexo !="f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt(i + " - El sexo debe se f, m o nb").toLowerCase();
		}

		temperaturaCorporal = parseInt(prompt(i + " - Ingrese la temperatura"));
		while(temperaturaCorporal < 35 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = parseInt(prompt(i + " - La temperatura debe estar entre 35 y 45°"));
		}
		
		if(temperaturaCorporal > maxTemperaturaCorporal || flagMaximaTemperaturaCorporal == true)
		{
			maxTemperaturaCorporal = temperaturaCorporal;
			nacionalidadMaximaTemperaturaCorporal = nacionalidad;
			flagMaximaTemperaturaCorporal = false;
		}

		switch(estadoCivil)
		{
		  case "casado":
			if(sexo == "f")
			{
				contadorMujeresCasadas++;
				sumaEdadMujeresCasadas += edad;
			}

			break;
		  case "soltero":
			if(edad > 17)
			{
				contadorSolterosMayoresDeEdad++;
			}
			if(sexo == "f")
			{
				contadorMujeresSolterasoViudas++;
			}
			break;
		  case "viudo":
			if(sexo == "f")
			{
				contadorMujeresSolterasoViudas++;
			}
			break;
		}

		if(edad > 60 && temperaturaCorporal > 37)
		{
			contadorPersonasTerceraEdadConFiebre++;
		}

		respuestaSalida = prompt("Desea salir?: coloque s").toLowerCase();
		if(respuestaSalida == "s")
		{
		flagIngreso = false;
		}
		i++;
	}while(flagIngreso == true);

	promedioEdadMujeresCasadas = (sumaEdadMujeresCasadas / contadorMujeresCasadas).toFixed(2);
	if(promedioEdadMujeresCasadas == NaN)
	{
		promedioEdadMujeresCasadas = 0;
	}

	document.write("a. La nacionalidad de la persona con más temperatura es " + nacionalidadMaximaTemperaturaCorporal + "<br>b. Hay " + contadorSolterosMayoresDeEdad + " solteros mayores de edad." +
	"<br>c.Hay " + contadorMujeresSolterasoViudas + " mujeres solteras o viudas" + "<br>d.Hay " + contadorPersonasTerceraEdadConFiebre + " personas de la 3ra edad con fiebre." +
	"<br>e.El promedio de las mujeres casadas es: " + promedioEdadMujeresCasadas);
  
}
