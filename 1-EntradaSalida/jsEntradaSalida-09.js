/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var incremento;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	incremento = sueldo * 1.1 ;
	document.getElementById("txtIdResultado").value = incremento;
	

}
/* EJERCICIO 9 BIS
	var sueldo;
	var incremento;
	var procentaje;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	procentaje = parseInt(prompt("Ingrese el porcentaje"));
	incremento = sueldo * (1+procentaje/100) ;

	document.getElementById("txtIdResultado").value = incremento;
	*/
