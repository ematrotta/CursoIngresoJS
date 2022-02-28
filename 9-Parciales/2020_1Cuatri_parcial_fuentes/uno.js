
function mostrar()
{
	var i;

	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;

	var minAlcohol;

	var fabricanteMinAlcohol;
	var cantidadMinAlcohol;
	var prmedioComprasYCantidades;

	var flagMinAlcohol;

	var sumaCantidadesAlcohol;
	var sumaCantidadesBarbijo;
	var sumaCantidadesJabon;
	var comprasAlcohol;
	var comprasBarbijo;
	var comprasJabon;

	sumaCantidadesJabon = 0;
	sumaCantidadesAlcohol = 0;
	sumaCantidadesBarbijo = 0;
	comprasAlcohol = 0;
	comprasBarbijo = 0;
	comprasJabon = 0;


	flagMinAlcohol = true;


	for(i = 1 ; i < 6 ; i++)
	{
		producto = prompt(i + " - Ingrese tipo de producto").toLowerCase();
		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
		{
			producto = prompt(i + " - El producto debe ser barbijo, jabon o alcohol").toLowerCase();
		}

		precio = parseInt(prompt(i + " - Ingrese el precio del producto"));
		while(precio < 100 || precio > 300)
		{
			precio = parseInt(prompt(i + " - El precio debe estar entre 100 y 300"));
		}

		cantidad = parseInt(prompt(i + " - Ingrese la cantidad"));
		while(cantidad < 1)
		{
			cantidad = parseInt(prompt(i + " - La cantidad debe ser mayor o igual a 1"));
		}

		marca = prompt(i + " - Ingrese la marca").toLowerCase();
		while(marca == "")
		{
			marca = prompt(i + " - Debe ingresar una marca").toLowerCase();
		}

		fabricante = prompt(i + " - Ingrese el fabricante").toLowerCase();
		while(fabricante == "")
		{
			fabricante = prompt(i + " - Debe ingresar un fabricante").toLowerCase();
		}

		//a. a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		
		switch(producto)
		{
			case "alcohol":
				if(precio < minAlcohol || flagMinAlcohol == true)
				{
					minAlcohol = precio;
					fabricanteMinAlcohol = fabricante;
					cantidadMinAlcohol = cantidad;
					flagMinAlcohol = false;
				}
				sumaCantidadesAlcohol += cantidad;
				comprasAlcohol++;

				break;
			case "barbijo":
				sumaCantidadesBarbijo += cantidad;
				comprasBarbijo++;
				break;
			case "jabon":
				sumaCantidadesJabon += cantidad;
				comprasJabon++;
				break;
		}
		
	}

	if(sumaCantidadesAlcohol > sumaCantidadesBarbijo && sumaCantidadesAlcohol > sumaCantidadesJabon)
	{
		promedioComprasYcantidades = (sumaCantidadesAlcohol / comprasAlcohol).toFixed(2);
	}
	else
	{
		if(sumaCantidadesBarbijo > sumaCantidadesJabon)
		{
			promedioComprasYcantidades = (sumaCantidadesBarbijo / comprasBarbijo).toFixed(2);
		}
		else
		{
			promedioComprasYcantidades = (sumaCantidadesJabon / comprasJabon).toFixed(2);
		}
	}

	document.write("El fabricante del alcohol más barato es: " + fabricanteMinAlcohol + " y se compraron " + cantidadMinAlcohol + 
	"<br>El promedio del tipo con más unidades es: " + promedioComprasYcantidades + "<br>Se compraron " + sumaCantidadesJabon + " unidades de jabon.")


}
