/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    perimetro = parseInt((largo*2 + ancho*2)*3);

    alert("La cantidad de alambre a comprar es: " + perimetro);

}
function Circulo () 
{
    var radio;
    var perimetro;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = parseInt((2 * 3.14 * radio)*3);

    alert("La cantidad de alambre a comprar es: " + perimetro);
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bCal;
    var bCemento;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    area = largo*ancho;
    bCal = area * 3;
    bCemento = area * 2;

    alert("Se necesitan " + bCal + " bolsas de Cal y " + bCemento + " de Cemento");
	
}