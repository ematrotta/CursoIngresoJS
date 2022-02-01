/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById("txtIdNombre").value;
	/* nombreIngresado=txtIdNombre.value; Se puede utilizar como opción 
	pero al hacerlo de este modo, se convierte en variable y en códigos muy largos
	se puede sobreescribir y generar errores */ 
	alert(nombre);

}


