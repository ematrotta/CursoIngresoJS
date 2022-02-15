/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

    function CalcularPrecio () 
{
    /* EJERCICIO RESUELTO USANDO IF ELSE
    var cantidadDeLamparas;
    var marca;
    var precioConDescuento;
    var porcentaje;
    var precio;
    var precioBruto;
    var ingresoBruto;

    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35


    if(cantidadDeLamparas > 5) // A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

    {
        porcentaje = 50;
    }
    else if (cantidadDeLamparas == 5) //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        {
            if (marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        else if(cantidadDeLamparas == 4) //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;

                }
            }
            else if(cantidadDeLamparas == 3)//D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 15;
                    }
                    else if(marca == "FelipeLamparas")
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;

                        }
                }
                else
                {
                    porcentaje = 0;

                }


    

    precioBruto = precio - (precio * porcentaje/100);
    precioConDescuento = precioBruto.toFixed(2) * cantidadDeLamparas;

    if(precioConDescuento > 120)
    {
        ingresoBruto = precioConDescuento * 10/100;
        alert("Usted pago " + ingresoBruto + " de IIBB");
        precioConDescuento = precioConDescuento + ingresoBruto;

    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
*/



//EJERCICIO RESUELTO USANDO SWITCH
/*
    var precio;
    var cantidadDeLamparas;
    var marca;
    var descuento;
    var precioConDescuento;
    var ingresosBrutos;
    var subtotalConDescuento;

    precio = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cantidadDeLamparas)
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
            break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        default:
            descuento = 50;
            break;

    }

    precioConDescuento = precio - precio*descuento/100;
    subtotalConDescuento = cantidadDeLamparas * precioConDescuento;

    if(subtotalConDescuento > 120)
    {
        ingresosBrutos = subtotalConDescuento * 10/100;
        alert("Usted tuvo que pagar $" + ingresosBrutos.toFixed(2) + " de IIBB");
        subtotalConDescuento = subtotalConDescuento + ingresosBrutos;
    }
    
    document.getElementById("txtIdprecioDescuento").value = subtotalConDescuento;
*/

//EJERCICIO RESUELTO USANDO IF + SWITCH

/*
    var precio;
    var cantidadDeLamparas;
    var marca;
    var descuento;
    var precioConDescuento;
    var ingresosBrutos;
    var subtotalConDescuento;

    precio = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidadDeLamparas < 3)
    {
        descuento = 0;
    }
    else
    {
        if(cantidadDeLamparas == 3)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
        }
        else
        {
            if (cantidadDeLamparas == 4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;
                        break;
                }
            }
            else
            {
                if(cantidadDeLamparas == 5)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            descuento = 40;
                            break;
                        default:
                            descuento = 30;
                            break;
                    }
                }
                else
                {
                    descuento = 50;
                }
            }

        }
    }

    precioConDescuento = precio - precio*descuento/100;
    subtotalConDescuento = cantidadDeLamparas * precioConDescuento;

    if(subtotalConDescuento > 120)
    {
        ingresosBrutos = subtotalConDescuento * 10/100;
        alert("Usted tuvo que pagar $" + ingresosBrutos.toFixed(2) + " de IIBB");
        subtotalConDescuento = subtotalConDescuento + ingresosBrutos;
    }
    
    document.getElementById("txtIdprecioDescuento").value = subtotalConDescuento;
*/


//EJERCICIO RESUELTO USANDO SWITCH + IF

    var precio;
    var cantidadDeLamparas;
    var marca;
    var descuento;
    var precioConDescuento;
    var ingresosBrutos;
    var subtotalConDescuento;

    precio = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cantidadDeLamparas)
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
            break;
    }

    precioConDescuento = precio - precio*descuento/100;
    subtotalConDescuento = cantidadDeLamparas * precioConDescuento;

    if(subtotalConDescuento > 120)
    {
        ingresosBrutos = subtotalConDescuento * 10/100;
        alert("Usted tuvo que pagar $" + ingresosBrutos.toFixed(2) + " de IIBB");
        subtotalConDescuento = subtotalConDescuento + ingresosBrutos;
    }
    
    document.getElementById("txtIdprecioDescuento").value = subtotalConDescuento;

}
