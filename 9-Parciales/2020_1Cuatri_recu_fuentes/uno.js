
function mostrar()
{
	var i;
	var tipoProducto;
	var precio;
	var marca;
	var fabricante;
	var cantidad;

	var maxPrecioJabones;
	var sumaCantidadesJabon;
	var sumaCantidadesAlcohol;
	var sumaCantidadesBarbijo;
	var contadorCompraAlcohol;
	var contadorCompraJabon;
	var contadorCompraBarbijo;

	var cantidadJabonMasCaro;
	var fabricanteJabonMasCaro;
	var tipoDeProductoConMasCantidades;
	var promedioTipoConMasUnidades;

	var flagPrecioMaxJabones;

	flagPrecioMaxJabones = true;

	sumaCantidadesAlcohol = 0;
	sumaCantidadesBarbijo = 0;
	sumaCantidadesJabon = 0;
	contadorCompraAlcohol = 0;
	contadorCompraBarbijo = 0;
	contadorCompraJabon = 0;

	for(i = 1; i<5 ;i++)
	{
		tipoProducto = prompt(i + " - Ingrese el tipo de Producto").toLowerCase();
		while(tipoProducto !="jabon" && tipoProducto != "barbijo" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt(i + " - El tipo de producto debe ser jabon, alcohol o barbijo").toLowerCase();
		}

		precio = parseInt(prompt(i + " - Ingrese el precio del producto"));
		while(precio < 100 || precio > 300)
		{
			precio = parseInt(prompt(i + " - El precio debe estar entre 100 y 300"));		
		}

		cantidad = parseInt(prompt(i + " - Ingrese la cantidad"));
		while(cantidad < 1)
		{
			cantidad = parseInt(prompt(i + " - La cantidad debe ser mayor que 0"));
		
		}
		marca = prompt(i + " - Ingrese la marca del producto").toLowerCase();
		while(marca == "")
		{
			marca = prompt(i + " - Ingrese la marca del producto").toLowerCase();
		}

		fabricante = prompt(i + " - Ingrese el fabricante").toLowerCase();
		while(fabricante == "")
		{
			fabricante = prompt(i + " - Ingrese el fabricante del producto").toLowerCase();
		}

		switch(tipoProducto)
		{
			case "jabon":
				if(precio > maxPrecioJabones || flagPrecioMaxJabones == true)
				{
					maxPrecioJabones = precio;
					fabricanteJabonMasCaro = fabricante;
					cantidadJabonMasCaro = cantidad;
					flagPrecioMaxJabones = false;
				}
				contadorCompraJabon++;
				sumaCantidadesJabon += cantidad;
				break;
			case "alcohol":
				sumaCantidadesAlcohol += cantidad;
				contadorCompraAlcohol++;
				break;
			case "barbijo":
				sumaCantidadesBarbijo += cantidad;
				contadorCompraBarbijo++;
				break;

		}

	
	}

	if(sumaCantidadesAlcohol > sumaCantidadesBarbijo && sumaCantidadesAlcohol > sumaCantidadesJabon)
	{
		tipoDeProductoConMasCantidades = "El tipo de producto con más unidades es alcohol";
		promedioTipoConMasUnidades = (sumaCantidadesAlcohol / contadorCompraAlcohol).toFixed(2);
	}
	else
	{
		if(sumaCantidadesBarbijo > sumaCantidadesJabon && sumaCantidadesBarbijo > sumaCantidadesAlcohol)
		{
			tipoDeProductoConMasCantidades = "El tipo de producto con más unidades es barbijo";
			promedioTipoConMasUnidades = (sumaCantidadesBarbijo / contadorCompraBarbijo).toFixed(2);


		}
		else
		{
			tipoDeProductoConMasCantidades = "El tipo de producto con más unidades es jabon";
			promedioTipoConMasUnidades = (sumaCantidadesBarbijo / contadorCompraBarbijo).toFixed(2);
		}
	}

	document.write("a. El fabricante del jabon más caro es: " + fabricanteJabonMasCaro + " y las cantidades son: " + cantidadJabonMasCaro + "<br>" +
	"b. "+ tipoDeProductoConMasCantidades + " y el promedio por compra es " + promedioTipoConMasUnidades + "<br>" + 
	"c. Se compraron " + sumaCantidadesBarbijo + " unidades de barbijo.");
}
