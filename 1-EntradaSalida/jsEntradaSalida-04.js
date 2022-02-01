/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado = prompt("Ingrese un ID");
	//txtIdNombre.value = nombreIngresado; //
	document.getElementById("txtIdNombre").value = nombreIngresado
}

