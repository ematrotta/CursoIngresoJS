function mostrar()
{
	// EJERCICIO CORRECTO
	/* var edad;
	var estadoCivil;
	var estadoCivilSelect;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil");
	estadoCivilSelect = estadoCivil.options[estadoCivil.selectedIndex].text;

	if (edad < 18 && estadoCivilSelect !== "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	*/

	//CLASE SABADO 12-02
	
	var edad;
	var mensaje;
	var nombre;
	var cumplido;
	var comentarioEstadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	mensaje = "";
	nombre = prompt("Ingrese su nombre").toLowerCase();
	cumplido = "";
	estadoCivil = document.getElementById("estadoCivil").value;
	comentarioEstadoCivil ="";

	if (edad < 13)
	{
		if(nombre == "ricardo")
			{
				cumplido = ", muy chiquito para ese nombre.";
			}
		mensaje = nombre + cumplido + " Feliz día";
	}
	else
	{
		if(estadoCivil = "Casado")
		{
			comentarioEstadoCivil = " Casado, quiere Casa. ";
		}
		if(edad < 18)
		{
			if(estadoCivil = "Divorciado")
			{
				comentarioEstadoCivil = " Toda una vida por delante";
			}
			if(nombre == "violeta")
			{
				cumplido = ", como un color!!.";
			}
			mensaje = nombre + cumplido + " Usted es adolecente";
			if (edad == 17)
			{
				mensaje = mensaje + " , último año!!!";
			}

		}
		else
		{
			if(edad < 60)
			{
				if(estadoCivil = "Soltero")
				{
					comentarioEstadoCivil = " A salir.";
				}
				mensaje = nombre + " tienes edad de laburar";
				if(edad == 33)
				{
					mensaje = mensaje + ", como Cristo";
				}
			}
			else
			{
				if(nombre == "alfredo")
				{
					cumplido = ", como el de QUEEN.";
				}
				mensaje = nombre + cumplido + " A jubilarse";
				if(edad == 88)
				{
					mensaje = mensaje + ", lindo número";
				}

			}


		}


	}
	if((edad % 2) == 0)
	{
		mensaje = mensaje + ", sos par!!";
	}

	alert(mensaje + comentarioEstadoCivil);




}//FIN DE LA FUNCIÓN