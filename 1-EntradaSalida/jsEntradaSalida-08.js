/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var nroDividendo ;
	var nroDivisor ;
	var resto;

	nroDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	nroDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = nroDividendo % nroDivisor;
	
	alert("El resto es " + resto);
}
