function mostrar()
{

    var flagIngreso;

    var respuestaSalida;
    var producto;
    var cantidadBolsas;

    var precioBolsaArena;
    var precioBolsaCal;
    var precioBolsaCemento;

    var contadorBolsasArena;
    var contadorBolsasCal;
    var contadorBolsasCemento;

    var cantidadBolsasTotal;
    var descuento;
    var importeBrutoSinDescuento;
    var importeConDescuento;
    var tipoConMasCantidades;
    var tipoMasCaro;

    flagIngreso = true;

    precioBolsaArena = 35;
    precioBolsaCal = 45;
    precioBolsaCemento = 40;

    contadorBolsasArena = 0;
    contadorBolsasCal = 0;
    contadorBolsasCemento = 0;


    do
    {
        producto = prompt("Ingrese un tipo de producto").toLowerCase();
        while(producto != "arena" && producto != "cal" && producto != "cemento")
        {
            producto = prompt("El producto debe ser arena, cal o cemento").toLowerCase();
        }

        cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
        while(cantidadBolsas < 1)
        {
            cantidadBolsas = parseInt(prompt("La cantidad de bolsas debe ser mayor que 0"));
        }

        switch(producto)
        {
            case "arena":
                contadorBolsasArena += cantidadBolsas;
                break;
            case "cal":
                contadorBolsasCal += cantidadBolsas;
                break;
            case "cemento":
                contadorBolsasCemento += cantidadBolsas;
                break;

        }

        //SALIDA DEL BUCLE
        respuestaSalida = prompt("Desea Salir?: Coloque s").toLowerCase();
        if(respuestaSalida == "s")
        {
            flagIngreso = false;
        }

    }while(flagIngreso == true);

    cantidadBolsasTotal = contadorBolsasArena + contadorBolsasCal + contadorBolsasCemento;

    //TOTAL DEL DESCUENTO
    if(cantidadBolsasTotal > 30)
    {
        descuento = 25;
    }
    else
    {
        if(cantidadBolsas > 10)
        {
            descuento = 15;
        }
        else
        {
            descuento = 0;
        }
    }

    //SUBTOTAL

    importeBrutoSinDescuento = contadorBolsasArena * precioBolsaArena + contadorBolsasCal * precioBolsaCal + contadorBolsasCemento * precioBolsaCemento;

    if(descuento > 0)
    {
        importeConDescuento = (importeBrutoSinDescuento - (importeBrutoSinDescuento * descuento/100)).toFixed(2);
        importeConDescuento = "El importe con descuento a pagar es: " + importeConDescuento;
    }

    if(contadorBolsasArena > contadorBolsasCal && contadorBolsasArena > contadorBolsasCemento)
    {
        tipoConMasCantidades = "El tipo con más cantidades es la arena."
    }
    else
    {
        if(contadorBolsasCal > contadorBolsasCemento)
        {
            tipoConMasCantidades = "El tipo con más cantidades es la cal."
        }
        else
        {
            tipoConMasCantidades = "El tipo con más cantidades es el cemento."
        }
      
    }

    if(precioBolsaArena > precioBolsaCal && precioBolsaArena > precioBolsaCemento)
    {
        tipoMasCaro = "El tipo más caro es la arena";
    }
    else
    {
        if(precioBolsaCal > precioBolsaCemento)
        {
            tipoMasCaro = "El tipo más caro es la Cal";
        }
        else
        {
            tipoMasCaro = "El tipo más caro es el cemento";
        }
    
    }

    document.write("El importe bruto a pagar sin descuento es: " + importeBrutoSinDescuento + "<br>" + importeConDescuento + "<br>" + tipoConMasCantidades + "<br>" + tipoMasCaro);

  

}


