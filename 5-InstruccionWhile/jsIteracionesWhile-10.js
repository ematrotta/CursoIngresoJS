/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numero;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosYNegativos;
	var respuesta;
	var mensajePromedioCantidadNegativos;
	var mensajePromedioCantidadPositivos;

	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadNumerosPares = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));

		//SEPARO NÚMEROS POSITIVOS
		if(numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
			cantidadPositivos++;
		}

		//SEPARO NÚMEROS NEGATIVOS
		else
		{
			if(numero < 0)
			{
				sumaNegativos = sumaNegativos + numero;
				cantidadNegativos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		// CONTABILIZO NÚMEROS PARES
		if(numero % 2 == 0)
		{
			cantidadNumerosPares++;
		}
		respuesta = prompt("Si desea salir coloque la letra: S").toLowerCase();
	}while(respuesta != "s");

	//VALIDO CANTIDAD DE POSITIVOS Y HAGO PROMEDIO DE POSITIVOS
	if(cantidadPositivos > 0)
	{
		promedioPositivos = (sumaPositivos / cantidadPositivos).toFixed(2);
		mensajePromedioCantidadPositivos = "El promedio de números positivos es: " + promedioPositivos;
	}
	else
	{
		mensajePromedioCantidadPositivos = "No hay números positivos para hacer un promedio";
	}
	//VALIDO CANTIDAD DE NEGATIVOS Y HAGO PROMEDIO DE NEGATIVOS
	if(cantidadNegativos > 0)
	{
		promedioNegativos = (sumaNegativos / cantidadNegativos).toFixed(2);
		mensajePromedioCantidadNegativos = "El promedio de números negativos es: " + promedioNegativos;
	}
	else
	{
		mensajePromedioCantidadNegativos = "No hay números negativos para hacer un promedio";
	}

	//CALCULO DE DIFERENCIA DE POSITIVOS VS NEGATIVOS
	diferenciaPositivosYNegativos = sumaPositivos + sumaNegativos;

	document.write("La suma de los números negativos es: "+ sumaNegativos + "<br>" + "La suma de los números positivos es: "+ sumaPositivos + "<br>" +
	"La cantidad de Números negativos es: "+ cantidadNegativos + "<br>" + "La cantidad de números positivos es: "+ cantidadPositivos + "<br>" + 
	"La cantidad de números ceros es: "+ cantidadCeros + "<br>" + "La cantidad de números pares es: " + cantidadNumerosPares + "<br>" +
	"La cantidad de números pares es: " + cantidadNumerosPares + "<br>" + mensajePromedioCantidadPositivos + "<br>" + 
	mensajePromedioCantidadNegativos + "<br>" + "La diferencia entre números positivos y negativos es "+ diferenciaPositivosYNegativos);


}//FIN DE LA FUNCIÓN