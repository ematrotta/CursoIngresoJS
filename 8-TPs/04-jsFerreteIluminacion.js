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

}


/*
    if (cantLamparas >= 6)
    {
        porcentaje = 50/100;
        precioDescuento = cantLamparas * (precio - (precio * porcentaje));
    }
    //EJERCICIO B
    else
    {
        if(cantLamparas == 5 && marca == "ArgentinaLuz")
        {
            porcentaje = 40/100;
            precioDescuento = cantLamparas * (precio - (precio * porcentaje));
        }
        if(cantLamparas == 5 && marca != "ArgentinaLuz")
        {
            porcentaje = 30/100;
            precioDescuento = cantLamparas * (precio - (precio * porcentaje));
        }
        //EJERCICIO C
        else
        {
            if(cantLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 25/100;
                precioDescuento = cantLamparas * (precio - (precio * porcentaje));
            }
            if(cantLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas")
            {
                porcentaje = 20/100;
                precioDescuento = cantLamparas * (precio - (precio * porcentaje));
            }
            //EJERCICIO D
            else
            {
                if(cantLamparas == 3 && marca == "ArgentinaLuz")
                {
                    porcentaje = 15/100;
                    precioDescuento = cantLamparas * (precio - (precio * porcentaje));
                }
                if(cantLamparas == 3 && marca == "FelipeLamparas")
                {
                    porcentaje = 10/100;
                    precioDescuento = cantLamparas * (precio - (precio * porcentaje));
                }
                if(cantLamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas")
                {
                    porcentaje = 5/100;
                    precioDescuento = cantLamparas * (precio - (precio * porcentaje));
                }
                if(cantLamparas < 3)
                {
                    precioDescuento = cantLamparas * precio;
                    
                }

            }


        }
        
    }
    //EJERCICIO E
    if (precioDescuento >= 120)
    {
        ingresoBruto = precioDescuento * 10/100;
        ingresoBruto = ingresoBruto.toFixed(2);
        total = ingresoBruto + precioDescuento;
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
        alert("IIBB usted pago " + ingresoBruto);
    }
    else 
    if (precioDescuento < 120)
    {
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    }


} */

// https://onlinegdb.com/tVQKYqT3r // codigo correcto
// https://www.onlinegdb.com/1zT2FSwil // elseif sin tabular
// 

