/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var nroUno;
    var nroDos;
    var nroTres;
    var resultado;

    nroUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	nroDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    nroTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = nroUno + nroDos + nroTres;
    resultado = parseInt(resultado);

    alert("El resultado de la suma es: " + resultado);


}
function Promedio () 
{

    var nroUno;
    var nroDos;
    var nroTres;
    var resultado;

    nroUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	nroDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    nroTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = (nroUno + nroDos + nroTres)/3;
    resultado = parseInt(resultado);

    alert("El promedio es: " + resultado);
	
}
function PrecioFinal () 
{
    var nroUno;
    var nroDos;
    var nroTres;
    var resultado;

    nroUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	nroDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    nroTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = (nroUno + nroDos + nroTres)*1.21;
    resultado = parseInt(resultado);

    alert("El precio final es: " + resultado);
	
}