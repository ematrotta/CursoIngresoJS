/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

	//EJERCICIO APLICADO WHILE
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	//1- INGRESO LA EDAD Y LA VAIDO
	edad = parseInt(prompt("Ingrese la edad"));
	while(edad < 18 || edad > 90)
	{
		edad = parseInt(prompt("Ingrese una edad entre 18 y 90"));
	}
	document.getElementById("txtIdEdad").value = edad;

	//2- INGRESO EL SEXO Y LO VALIDO
	sexo = prompt("Ingrese el sexo: M o F").toLowerCase();
	while(sexo != "m" && sexo != "f")
	{
		sexo = prompt("Para el sexo ingrese solo M o F").toLowerCase();
	}
	if(sexo == "f")
	{
		sexo = "Femenino";
	}
	else
	{
		sexo = "Masculino";
	}
	document.getElementById("txtIdSexo").value = sexo;

	//3- ESTADO CIVIL Y LO VALIDO
	estadoCivil = parseInt(prompt("1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	while(estadoCivil < 1 || estadoCivil > 4)
	{
		estadoCivil = parseInt(prompt("Ingrese un número del 1 al 4"));
	}
	switch(estadoCivil)
	{
		case 1:
			estadoCivil = "Soltero";
			break;
		case 2:
			estadoCivil = "Casado";
			break;
		case 3:
			estadoCivil = "Divorciado"
			break;
		default:
			estadoCivil = "Viudo";
			break;
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;

	//4- INGRESO SUELDO BRUTO Y LO VALIDO
	sueldoBruto = parseInt(prompt("Ingrese el sueldo bruto"));
	while(sueldoBruto < 8000)
	{
		sueldoBruto = parseInt(prompt("El sueldo bruto debe ser mayor a 8000"));
	}
	document.getElementById("txtIdSueldo").value = sueldoBruto;

	//5- NUMERO DE LEGAJO VALIDADO
	numeroLegajo = parseInt(prompt("Ingrese un número de legajo"));
	while(numeroLegajo < 1000 || numeroLegajo > 10000)
	{
		numeroLegajo = parseInt(prompt("Debe contener 4 cifras sin 0 a la izquierda"));
	}
	document.getElementById("txtIdLegajo").value = numeroLegajo;

	//6- INGRESO NACIONALIDAD Y VALIDO
	nacionalidad = prompt("Ingrese nacionalidad: A para argentino, E Extranjeros o N nacionalizados").toLowerCase();
	while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
	{
		nacionalidad = prompt("Ingrese solo las letras A, E o N").toLowerCase();
	}
	switch(nacionalidad)
	{
		case "a":
			nacionalidad = "Argentino";
			break;
		case "e":
			nacionalidad = "Extrajero";
			break;
		case "n":
			nacionalidad = "Nacionalizado";
			break;
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidad;






	
 
 



}
