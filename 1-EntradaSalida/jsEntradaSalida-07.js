/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = nroUno + nroDos;
	alert("La suma es "+ resultado);
}

function restar()
{
	var nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = nroUno - nroDos;
	alert("La resta es "+ resultado);
}

function multiplicar()
{ 
	var nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = nroUno * nroDos;
	alert("La multiplicación es "+ resultado);
}

function dividir()
{
	var nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = nroUno / nroDos;
	alert("La división es "+ resultado);;
}

