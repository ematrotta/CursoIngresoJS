function mostrar()
{
  var flagIngreso;

  var siguienteIngreso;
  var tipoMaterial;
  var cantidadBolsas;
  var precioBolsaArena;
  var precioBolsaCal;
  var precioBolsaCemento;
  var descuento;

  var contadorCantidadBolsasArena;
  var contadorCantidadBolsasCal;
  var contadorCantidadBolsasCemento;
  var contadorBolsasTotal;

  var subtotalConDescuento;

  var tipoCantidadMaxima;
  var tipoPrecioMaximo;

  flagIngreso = true;


  precioBolsaArena = 35;
  precioBolsaCal = 70;
  precioBolsaCemento = 50;
  
  contadorCantidadBolsasArena = 0;
  contadorCantidadBolsasCal = 0;
  contadorCantidadBolsasCemento = 0;



  do
  {
    //PIDO TIPO DE MATERIAL Y VALIDO
    tipoMaterial = prompt("Ingrese el tipo de material: arena, cal o cemento").toLowerCase();
    while(tipoMaterial != "arena" && tipoMaterial != "cal" && tipoMaterial !="cemento")
    {
      tipoMaterial = prompt("Ingrese solo arena, cal o cemento").toLowerCase();
    }

    //PIDO CANTIDAD DE BOLSAS Y VALIDO
    cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while(cantidadBolsas < 1)
    {
      cantidadBolsas = parseInt(prompt("La cantidad de bolsas debe ser mayor que 0"));
    }

    switch(tipoMaterial)
    {
      case "arena":
        contadorCantidadBolsasArena += cantidadBolsas;
        break;
      case "cemento":
        contadorCantidadBolsasCemento += cantidadBolsas;
        break;
      case "cal":
        contadorCantidadBolsasCal += cantidadBolsas;
        break;
    }

    //BANDERA
		siguienteIngreso = prompt("Deses seguir el ingreso: coloque n para NO").toLowerCase();
		if(siguienteIngreso == "n")
		{
			flagIngreso = false;
		}

  }while(flagIngreso == true);


  //CONTABILIZO LA CANTIDAD DE BOLSAS TOTALES
  contadorBolsasTotal = contadorCantidadBolsasArena + contadorCantidadBolsasCal + contadorCantidadBolsasCemento;

  //DESCUENTO POR CANTIDAD DE BOLSAS
  switch(contadorBolsasTotal)
  {
    case contadorBolsasTotal > 10:
      descuento = 15;
      break;
    case contadorBolsasTotal > 30:
      descuento = 25;
      break;
    default:
      descuento = 0;
      break;
  }

  //IMPORTE BRUTO A PAGAR SIN DESCUENTO
  importeBruto = contadorCantidadBolsasArena * precioBolsaArena + contadorCantidadBolsasCal * precioBolsaArena + contadorCantidadBolsasCemento * precioBolsaCemento;

  if(descuento > 0)
  {
    subtotalConDescuento = importeBruto - (importeBruto * descuento /100);
  }
  else
  {
    subtotalConDescuento = importeBruto;
  }

  //CANTIDAD MAXIMA SEGUN TIPO
  if(contadorCantidadBolsasArena > contadorCantidadBolsasCal && contadorCantidadBolsasArena > contadorCantidadBolsasCemento)
  {
    tipoCantidadMaxima = "arena";
    
  }
  else
  {
    if(contadorCantidadBolsasCal > contadorCantidadBolsasCemento)
    {
      tipoCantidadMaxima = "cal";
    }
    else
    {
      tipoCantidadMaxima = "cemento";
    }
  }

  //TIPO MÁS CARO
  if(precioBolsaArena > precioBolsaCal && precioBolsaArena > precioBolsaCemento)
  {
    tipoPrecioMaximo = "Arena";
  }
  else
  {
    if(precioBolsaCal > precioBolsaCemento)
    {
      tipoPrecioMaximo = "Cal";
    }
    else
    {
      tipoPrecioMaximo = "Cemento";
    }
  }


  alert("El importe bruto a pagar es: $" + importeBruto + "\n El importe con descuento es: $" + subtotalConDescuento + "\n El tipo con más cantidad de bolsas es " + tipoCantidadMaxima + "\n El tipo más caro es " + tipoPrecioMaximo);

}


