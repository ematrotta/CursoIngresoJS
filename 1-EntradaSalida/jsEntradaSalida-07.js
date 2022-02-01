/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var nroUno;
	var nroDos;
	var resultado;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nroUno - nroDos;
	
	alert("La resta es "+ resultado);
}

function multiplicar()
{ 
	var nroUno;
	var nroDos;
	var resultado;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nroUno * nroDos;
	
	alert("La multiplicación es "+ resultado);
}

function dividir()
{
	var nroUno;
	var nroDos;
	var resultado;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nroUno / nroDos;
	
	alert("La división es "+ resultado);
}

