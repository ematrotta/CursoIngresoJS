/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var nroUno;
	var nroDos;
	var resultado;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nroUno + nroDos;
	
	alert("La suma es "+ resultado);
}

