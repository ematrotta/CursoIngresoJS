function mostrar()
{
	var flagIngreso;
	var flagMaximaTemperatura;

	var respuestaSalida;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	var MaximaTemperatura;
	var cantidadViudosMayoresDeEdad;
	var cantidadHombresSolteros;
	var cantidadHombresViudos;
	var cantidadPersonasDeTerceraEdadConFiebre;
	var cantidadHombresSolterosOViudos;
	var sumaEdadHombresSolteros;
	var promedioEdadHombresSolteros;

	var nombrePersonaMaximaTemperatura;

	flagIngreso = true;
	flagMaximaTemperatura = true;

	cantidadViudosMayoresDeEdad = 0;
	cantidadHombresSolteros = 0;
	cantidadHombresViudos = 0;
	cantidadPersonasDeTerceraEdadConFiebre = 0;
	sumaEdadHombresSolteros = 0;


	do
	{
		nombre = prompt("Ingrese el nombre.");
		while(nombre == "")
		{
			nombre = prompt("Ingrese un nombre");
		}

		edad = parseInt(prompt("Ingrese la edad"));
		while(edad < 0)
		{
			edad = parseInt(prompt("La edad debe ser mayor que 0"))
		}

		sexo = prompt("Ingrese el sexo: m, f o nb").toLowerCase();
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Ingrese el sexo: m, f o nb").toLowerCase();
		}

		estadoCivil = prompt("Ingrese el estado civil: Casado, Soltero o Viudo").toLowerCase();
		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("El estado civil debe ser casado, soltero o viudo").toLowerCase();
		}

		temperaturaCorporal = parseInt(prompt("Ingrese la temperatura"));
		while(temperaturaCorporal > 45 || temperaturaCorporal <35)
		{
			temperaturaCorporal = parseInt(prompt("La temperatura debe estar entre 35 y 45°"))
		}

		if(temperaturaCorporal > MaximaTemperatura || flagMaximaTemperatura == true)
		{
			MaximaTemperatura = temperaturaCorporal;
			nombrePersonaMaximaTemperatura = "El nombre de la persona con más temperatura es: " + nombre;
			flagMaximaTemperatura = false;
		}

		switch(estadoCivil)
		{
			case "casado":
				break;
			case "viduo":
				if(edad > 18)
				{
					cantidadViudosMayoresDeEdad++;
				}
				if(sexo == "m")
				{
					cantidadHombresViudos++;
				}
				break;
			case "soltero":
				if(sexo == "m")
				{
					cantidadHombresSolteros++;
					sumaEdadHombresSolteros += edad;
				}
				break;
		}

		if(edad > 60 && temperaturaCorporal > 37)
		{
			cantidadPersonasDeTerceraEdadConFiebre++;
		}

		respuestaSalida = prompt("Desea salir?: Coloque S").toLowerCase();
		if(respuestaSalida == "s")
		{
			flagIngreso = false;
		}
	}while(flagIngreso == true);

	cantidadHombresSolterosOViudos = cantidadHombresViudos + cantidadHombresSolteros;
	promedioEdadHombresSolteros = (sumaEdadHombresSolteros / cantidadHombresSolteros).toFixed(2);


	document.write(nombrePersonaMaximaTemperatura + "<br>Hay "+cantidadViudosMayoresDeEdad + "mayores de edad Viudos<br>Hay " + cantidadHombresSolterosOViudos +
	"hombres solteros o viudos<br>Hay " + cantidadPersonasDeTerceraEdadConFiebre + " personas de 3era edad con fiebre<br>El promedio de edad de los hombres solteros es: "+promedioEdadHombresSolteros);


}
