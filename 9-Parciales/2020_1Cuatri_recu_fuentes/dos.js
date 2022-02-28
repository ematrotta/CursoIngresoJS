function mostrar()
{
  var flagIngreso;

  var respuestaSalida;
  var tipoProducto;
  var cantidad;
  var descuento;
  var i;

  var precioBolsaArena;
  var precioBolsaCal;
  var precioBolsaCemento;
  var sumaTotalCantidadDeBolsas;
  var importeBrtutoSinDescuento;
  var importeConDescuento;
  var tipoDeProductoConMasCantidades;
  var tipoDeProductoConMasCaro;

  var sumaCantidadDeBolsasArena;
  var sumaCantidadDeBolsasCal;
  var sumaCantidadDeBolsasCemento;

  flagIngreso = true;
  i = 1;

  precioBolsaArena = 35;
  precioBolsaCemento = 40;
  precioBolsaCal = 45;

  sumaCantidadDeBolsasArena = 0;
  sumaCantidadDeBolsasCal = 0;
  sumaCantidadDeBolsasCemento = 0;

  do
  {
		tipoProducto = prompt(i + " - Ingrese el tipo de Producto").toLowerCase();
		while(tipoProducto !="cal" && tipoProducto != "cemento" && tipoProducto != "arena")
		{
			tipoProducto = prompt(i + " - El tipo de producto debe ser cal, arena o cemento").toLowerCase();
		}

    cantidad = parseInt(prompt(i + " - Ingrese la cantidad"));
		while(cantidad < 1)
		{
			cantidad = parseInt(prompt(i + " - La cantidad debe ser mayor que 0"));
		
		}

    switch(tipoProducto)
    {
      case "arena":
        sumaCantidadDeBolsasArena += cantidad;
        break;
      case "cal":
        sumaCantidadDeBolsasCal += cantidad
        break;
      case "cemento":
        sumaCantidadDeBolsasCemento += cantidad;
        break;
    }

    respuestaSalida = prompt("Desea salir?: coloque s").toLowerCase();
    if(respuestaSalida == "s")
    {
      flagIngreso = false;
    }
    i++;
  }while(flagIngreso == true);

  sumaTotalCantidadDeBolsas = sumaCantidadDeBolsasArena + sumaCantidadDeBolsasCal + sumaCantidadDeBolsasCemento;

  if(sumaTotalCantidadDeBolsas > 30)
  {
    descuento = 25;
  }
  else
  {
    if(sumaTotalCantidadDeBolsas > 10)
    {
      descuento = 15;
    }
    else
    {
      descuento = 0;
    }
  }

  importeBrtutoSinDescuento = sumaCantidadDeBolsasArena * precioBolsaArena + sumaCantidadDeBolsasCal * precioBolsaCal + sumaCantidadDeBolsasCemento * precioBolsaCemento;

  if(descuento > 0)
  {
    importeConDescuento = (importeBrtutoSinDescuento - (importeBrtutoSinDescuento * descuento /100)).toFixed(2);
    importeConDescuento = "<br>b. El importe con descuento es: " + importeConDescuento;
  }
  else
  {
    importeConDescuento = "";
  }


  if(sumaCantidadDeBolsasArena > sumaCantidadDeBolsasCal && sumaCantidadDeBolsasArena > sumaCantidadDeBolsasCemento)
  {
    tipoDeProductoConMasCantidades = "El tipo con más cantidad de bolsas es Arena. "
  }
  else
  {
    if(sumaCantidadDeBolsasCal > sumaCantidadDeBolsasArena && sumaCantidadDeBolsasCal > sumaCantidadDeBolsasCemento)
    {
      tipoDeProductoConMasCantidades = "El tipo con más cantidad de bolsas es Cal. "
    }
    else
    {
      tipoDeProductoConMasCantidades = "El tipo con más cantidad de bolsas es Cemento. "
    }
  }

  if(precioBolsaArena > precioBolsaCal && precioBolsaArena > precioBolsaCemento)
  {
    tipoDeProductoConMasCaro = "El tipo más Caro es: Arena "
  }
  else
  {
    if(precioBolsaCal > precioBolsaArena && precioBolsaCal > precioBolsaCemento)
    {
      tipoDeProductoConMasCaro = "El tipo más Caro es: Cal "
    }
    else
    {
      tipoDeProductoConMasCaro = "El tipo más Caro es: Cemento "
    }
  }

  document.write("a. El importe Bruto sin descuento es $" + importeBrtutoSinDescuento +
  importeConDescuento + "<br>c. " + tipoDeProductoConMasCantidades + "<br>d. " + tipoDeProductoConMasCaro);


}
