/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var nroUno = parseInt(txtIdNumeroUno.value);
	var nroDos = parseInt(txtIdNumeroDos.value);
	var resultado = nroUno + nroDos;
	alert("La suma es "+ resultado);
}

