/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = nroUno + nroDos;
	alert("La suma es "+ resultado);
}

