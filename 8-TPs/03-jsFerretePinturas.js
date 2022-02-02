/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var centigrados;
    var faren;

    faren = parseInt(document.getElementById("txtIdTemperatura").value);
    centigrados = (faren - 32) * 5/9;

    alert(faren + " °F es igual a " + centigrados + " °C");
	
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var faren;

    centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
    faren = (centigrados *9/5) + 32;

    alert(centigrados + " °C es igual a " + faren + " °F");
	
}
