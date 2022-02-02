/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var desc;

	importe = parseInt(document.getElementById("txtIdImporte").value);
	desc = importe * 0.75 ;
	
	document.getElementById("txtIdResultado").value = desc;
}
/*EJERCICIO 10 BIS


var importe;
var desc;
var procentaje;

importe = parseInt(document.getElementById("txtIdImporte").value);
procentaje = parseInt(prompt("Ingrese el porcentaje"));
desc = importe * (1-procentaje/100) ;

document.getElementById("txtIdResultado").value = desc;

*/
